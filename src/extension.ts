import * as vscode from "vscode";
import { getCompletionItems, getRaylibFunctions, renderDocumentation, RaylibFunction } from "./completionItems";

const LUA: vscode.DocumentSelector = { language: "lua" };

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

    const completionItems = getCompletionItems(vscode, namespace);
    const byName = new Map<string, RaylibFunction>(getRaylibFunctions(namespace).map(fn => [fn.name, fn]));

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
          const fn = byName.get(text.slice(dot + 1));
          if (!fn) {
            return undefined;
          }
          return new vscode.Hover(renderDocumentation(vscode, fn), range);
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
  }

  registerProviders();

  context.subscriptions.push(
    new vscode.Disposable(() => {
      for (const p of providers) {
        p.dispose();
      }
    }),
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration("raylib-lua.namespace")) {
        registerProviders();
      }
    })
  );
}

export function deactivate() {}
