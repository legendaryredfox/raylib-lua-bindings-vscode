import * as vscode from "vscode";
import { getCompletionItems } from "./completionItems"; // Import the function from completionItems.ts

export function activate(context: vscode.ExtensionContext) {
  // Get the pre-generated completion items from completionItems.ts
  const completionItems: vscode.CompletionItem[] = getCompletionItems(vscode);

  // Register a completion item provider for Lua files
  const provider = vscode.languages.registerCompletionItemProvider(
    { language: "lua", scheme: "file" },
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        return completionItems; // Return the pre-generated completion items
      },
    },
    "." // Trigger autocomplete after typing '.'
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
