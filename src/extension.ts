import * as vscode from "vscode";
import { getCompletionItems } from "./completionItems";

export function activate(context: vscode.ExtensionContext) {
  let completionProvider: vscode.Disposable | undefined;

  function registerProvider() {
    completionProvider?.dispose();

    const namespace = vscode.workspace.getConfiguration("raylib-lua").get<string>("namespace", "raylib");
    const completionItems = getCompletionItems(vscode, namespace);

    completionProvider = vscode.languages.registerCompletionItemProvider(
      { language: "lua", scheme: "file" },
      {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
          const linePrefix = document.lineAt(position).text.slice(0, position.character);
          if (!linePrefix.endsWith(`${namespace}.`)) {
            return undefined;
          }
          return completionItems;
        },
      },
      "."
    );
  }

  registerProvider();

  context.subscriptions.push(
    new vscode.Disposable(() => completionProvider?.dispose()),
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration("raylib-lua.namespace")) {
        registerProvider();
      }
    })
  );
}

export function deactivate() {}
