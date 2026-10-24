import * as vscode from "vscode";
import {
  getCompletionItems,
  getConstantCompletionItems,
  getRaylibConstants,
  getRaylibFunctions,
  renderConstantDocumentation,
  renderDocumentation,
  RaylibConstant,
  RaylibFunction,
} from "./completionItems";
import { scanCalls } from "./calls";
import { deprecations } from "./deprecations";

const LUA: vscode.DocumentSelector = { language: "lua" };
const DIAGNOSTIC_SOURCE = "raylib-lua";
const REPLACE_PREFIX = "replace:";

function settingEnabled(key: string): boolean {
  return vscode.workspace.getConfiguration("raylib-lua").get<boolean>(key, true);
}

/**
 * Walk backwards from the cursor to find the innermost raylib call the cursor
 * sits inside, tracking paren depth so nested calls resolve correctly. Returns
 * the bare function name and the zero-based index of the argument being typed.
 */
function findEnclosingCall(prefix: string, namespace: string): { name: string; activeParam: number } | undefined {
  let depth = 0;
  let commas = 0;
  for (let i = prefix.length - 1; i >= 0; i--) {
    const ch = prefix[i];
    if (ch === ")") {
      depth++;
    } else if (ch === "(") {
      if (depth === 0) {
        const before = prefix.slice(0, i);
        const m = before.match(/([A-Za-z_]\w*)\.([A-Za-z_]\w*)\s*$/);
        if (m && m[1] === namespace) {
          return { name: m[2], activeParam: commas };
        }
        return undefined;
      }
      depth--;
    } else if (ch === "," && depth === 0) {
      commas++;
    }
  }
  return undefined;
}

export function activate(context: vscode.ExtensionContext) {
  let providers: vscode.Disposable[] = [];

  function registerProviders() {
    for (const p of providers) {
      p.dispose();
    }
    providers = [];

    const configured = vscode.workspace.getConfiguration("raylib-lua").get<string>("namespace", "raylib");
    const namespace = configured?.trim() || "raylib";

    const completionItems = [...getCompletionItems(vscode, namespace), ...getConstantCompletionItems(vscode, namespace)];
    const byName = new Map<string, RaylibFunction>(getRaylibFunctions(namespace).map(fn => [fn.name, fn]));
    const constantsByName = new Map<string, RaylibConstant>(getRaylibConstants(namespace).map(c => [c.name, c]));

    providers.push(
      vscode.languages.registerCompletionItemProvider(
        LUA,
        {
          provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.slice(0, position.character);
            if (!linePrefix.endsWith(`${namespace}.`)) {
              return undefined;
            }
            return completionItems;
          },
        },
        "."
      )
    );

    providers.push(
      vscode.languages.registerHoverProvider(LUA, {
        provideHover(document, position) {
          const range = document.getWordRangeAtPosition(position, /[A-Za-z_]\w*\.[A-Za-z_]\w*/);
          if (!range) {
            return undefined;
          }
          const text = document.getText(range);
          const dot = text.indexOf(".");
          if (text.slice(0, dot) !== namespace) {
            return undefined;
          }
          const member = text.slice(dot + 1);
          const fn = byName.get(member);
          if (fn) {
            return new vscode.Hover(renderDocumentation(vscode, fn), range);
          }
          const constant = constantsByName.get(member);
          return constant ? new vscode.Hover(renderConstantDocumentation(vscode, constant), range) : undefined;
        },
      })
    );

    providers.push(
      vscode.languages.registerSignatureHelpProvider(
        LUA,
        {
          provideSignatureHelp(document, position) {
            const linePrefix = document.lineAt(position).text.slice(0, position.character);
            const call = findEnclosingCall(linePrefix, namespace);
            if (!call) {
              return undefined;
            }
            const fn = byName.get(call.name);
            if (!fn || fn.params.length === 0) {
              return undefined;
            }
            const info = new vscode.SignatureInformation(fn.signature, renderDocumentation(vscode, fn));
            info.parameters = fn.params.map(p => new vscode.ParameterInformation(p));
            const help = new vscode.SignatureHelp();
            help.signatures = [info];
            help.activeSignature = 0;
            help.activeParameter = Math.min(call.activeParam, fn.params.length - 1);
            return help;
          },
        },
        "(",
        ","
      )
    );

    providers.push(
      vscode.languages.registerInlayHintsProvider(LUA, {
        provideInlayHints(document, range) {
          if (!settingEnabled("inlayHints")) {
            return [];
          }
          const text = document.getText();
          const from = document.offsetAt(range.start);
          const to = document.offsetAt(range.end);
          const hints: vscode.InlayHint[] = [];
          for (const call of scanCalls(text, namespace)) {
            if (call.openParen < from || call.openParen > to) {
              continue;
            }
            const fn = byName.get(call.name);
            if (!fn || fn.params.length === 0) {
              continue;
            }
            call.args.slice(0, fn.params.length).forEach((arg, i) => {
              const param = fn.params[i];
              if (text.slice(arg.start, arg.end) === param) {
                return;
              }
              const hint = new vscode.InlayHint(document.positionAt(arg.start), `${param}:`, vscode.InlayHintKind.Parameter);
              hint.paddingRight = true;
              hints.push(hint);
            });
          }
          return hints;
        },
      })
    );

    providers.push(
      vscode.languages.registerCodeActionsProvider(
        LUA,
        {
          provideCodeActions(document, _range, context) {
            const actions: vscode.CodeAction[] = [];
            for (const d of context.diagnostics) {
              const code = typeof d.code === "string" ? d.code : undefined;
              if (d.source !== DIAGNOSTIC_SOURCE || !code?.startsWith(REPLACE_PREFIX)) {
                continue;
              }
              const replacement = code.slice(REPLACE_PREFIX.length);
              const action = new vscode.CodeAction(`Replace with ${replacement}`, vscode.CodeActionKind.QuickFix);
              action.diagnostics = [d];
              action.isPreferred = true;
              action.edit = new vscode.WorkspaceEdit();
              action.edit.replace(document.uri, d.range, replacement);
              actions.push(action);
            }
            return actions;
          },
        },
        { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] }
      )
    );

    refreshAllDiagnostics(namespace);
  }

  const diagnostics = vscode.languages.createDiagnosticCollection(DIAGNOSTIC_SOURCE);

  function refreshDiagnostics(document: vscode.TextDocument, namespace: string) {
    if (document.languageId !== "lua" || !settingEnabled("diagnostics")) {
      diagnostics.delete(document.uri);
      return;
    }
    const found: vscode.Diagnostic[] = [];
    for (const call of scanCalls(document.getText(), namespace)) {
      const info = deprecations[call.name];
      if (!info) {
        continue;
      }
      const range = new vscode.Range(document.positionAt(call.nameStart), document.positionAt(call.nameEnd));
      const isDeprecated = info.kind === "deprecated";
      const d = new vscode.Diagnostic(
        range,
        info.message,
        isDeprecated ? vscode.DiagnosticSeverity.Warning : vscode.DiagnosticSeverity.Hint
      );
      d.source = DIAGNOSTIC_SOURCE;
      if (isDeprecated) {
        d.tags = [vscode.DiagnosticTag.Deprecated];
      }
      if (info.replacement) {
        d.code = `${REPLACE_PREFIX}${info.replacement}`;
      }
      found.push(d);
    }
    diagnostics.set(document.uri, found);
  }

  function currentNamespace(): string {
    const configured = vscode.workspace.getConfiguration("raylib-lua").get<string>("namespace", "raylib");
    return configured?.trim() || "raylib";
  }

  function refreshAllDiagnostics(namespace: string) {
    diagnostics.clear();
    vscode.workspace.textDocuments.forEach(doc => refreshDiagnostics(doc, namespace));
  }

  registerProviders();

  context.subscriptions.push(
    new vscode.Disposable(() => {
      for (const p of providers) {
        p.dispose();
      }
    }),
    diagnostics,
    vscode.workspace.onDidOpenTextDocument(doc => refreshDiagnostics(doc, currentNamespace())),
    vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, currentNamespace())),
    vscode.workspace.onDidCloseTextDocument(doc => diagnostics.delete(doc.uri)),
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration("raylib-lua.namespace")) {
        registerProviders();
      } else if (e.affectsConfiguration("raylib-lua.diagnostics")) {
        refreshAllDiagnostics(currentNamespace());
      }
    })
  );
}

export function deactivate() {}
