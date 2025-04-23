// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { dataStores } from "./stores";
import { storeSelectors } from "./selectors";
import { storeActions } from "./actions";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "wp-data-stores" is now active!');

  // Register completion provider for JavaScript/TypeScript files
  const hooksProvider = vscode.languages.registerCompletionItemProvider(
    ["javascript", "typescript", "javascriptreact", "typescriptreact"],
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        // Get the line text up to the cursor position
        const linePrefix = document
          .lineAt(position)
          .text.substring(0, position.character);

        console.log("Line prefix:", linePrefix);

        // Handle select() calls
        if (linePrefix.includes("select(")) {
          console.log("Found select( in line prefix");

          // If we're at select(, show store suggestions
          if (linePrefix.endsWith("select(")) {
            console.log("Providing store suggestions");
            return dataStores.map((store) => {
              const completionItem = new vscode.CompletionItem(
                `'${store}'`,
                vscode.CompletionItemKind.Value
              );
              completionItem.detail = "WordPress Data Store";
              completionItem.documentation = new vscode.MarkdownString(
                `Select data from the ${store} store`
              );
              return completionItem;
            });
          }

          // If we have a store name followed by a dot, show selectors
          const storeMatch = linePrefix.match(
            /select\(['"]?([^'")]*)['"]?\)\./
          );
          if (storeMatch && storeMatch[1]) {
            const storeName = storeMatch[1];
            console.log("Found store name:", storeName);

            const selectors = storeSelectors[storeName];
            if (selectors) {
              return selectors.map((selector) => {
                const completionItem = new vscode.CompletionItem(
                  selector.name,
                  vscode.CompletionItemKind.Method
                );
                completionItem.detail = `Selector: ${selector.name}`;
                completionItem.documentation = new vscode.MarkdownString(
                  `**${selector.name}**\n\n${selector.description}`
                );
                return completionItem;
              });
            }
          }
        }

        // Handle useDispatch
        if (linePrefix.includes("useDispatch")) {
          console.log("Found useDispatch in line");

          // Only handle store selection
          if (linePrefix.includes("useDispatch(")) {
            // We're at the store selection point
            console.log("Providing store suggestions for useDispatch");
            return dataStores.map((store) => {
              const completionItem = new vscode.CompletionItem(
                `'${store}'`,
                vscode.CompletionItemKind.Value
              );
              completionItem.detail = "WordPress Data Store";
              completionItem.documentation = new vscode.MarkdownString(
                `Dispatch actions from the ${store} store`
              );
              return completionItem;
            });
          }
        } else if (linePrefix.includes("{") || linePrefix.endsWith(",")) {
          // We're in a destructuring pattern or after a comma, look for useDispatch in the line
          const lineText = document.lineAt(position).text;
          const storeMatch = lineText.match(
            /useDispatch\(\s*['"]([^'"]*)['"]\s*\)/
          );

          if (storeMatch && storeMatch[1]) {
            const storeName = storeMatch[1];
            const actions = storeActions[storeName];

            if (actions) {
              // Get the text between the curly braces
              const destructuredMatch = lineText.match(/\{\s*([^}]*)\s*\}/);
              if (destructuredMatch && destructuredMatch[1]) {
                // Get the list of already selected actions
                const selectedActions = destructuredMatch[1]
                  .split(",")
                  .map((action) => action.trim())
                  .filter((action) => action.length > 0);

                // Filter out already selected actions
                const remainingActions = actions.filter(
                  (action) => !selectedActions.includes(action.name)
                );

                return remainingActions.map((action) => {
                  const completionItem = new vscode.CompletionItem(
                    action.name,
                    vscode.CompletionItemKind.Method
                  );
                  completionItem.detail = `Action: ${action.name}`;
                  completionItem.documentation = new vscode.MarkdownString(
                    `**${action.name}**\n\n${action.description}`
                  );
                  return completionItem;
                });
              }

              // If no destructured items yet, show all actions
              return actions.map((action) => {
                const completionItem = new vscode.CompletionItem(
                  action.name,
                  vscode.CompletionItemKind.Method
                );
                completionItem.detail = `Action: ${action.name}`;
                completionItem.documentation = new vscode.MarkdownString(
                  `**${action.name}**\n\n${action.description}`
                );
                return completionItem;
              });
            }
          }
        }

        return undefined;
      },
    },
    "'",
    '"',
    ".",
    "{",
    "(",
    ","
  );

  context.subscriptions.push(hooksProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
