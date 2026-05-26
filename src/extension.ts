import * as vscode from "vscode";
import { getCompletionItems } from "./completionItems";

export function activate(context: vscode.ExtensionContext) {
  const completionItems = getCompletionItems(vscode);

  const provider = vscode.languages.registerCompletionItemProvider(
    { language: "lua", scheme: "file" },
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!linePrefix.endsWith("raylib.")) {
          return undefined;
        }
        return completionItems;
      },
    },
    "."
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
