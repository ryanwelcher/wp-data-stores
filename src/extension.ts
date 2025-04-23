// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// Common WordPress data stores
const dataStores = [
  "core/block-editor",
  "core/editor",
  "core/notices",
  "core/interface",
  "core/data",
  "core/edit-post",
  "core/edit-site",
  "core/navigation",
  "core/preferences",
  "core/rich-text",
  "core/viewport",
];

// Store selectors mapping
const storeSelectors: Record<
  string,
  Array<{ name: string; description: string }>
> = {
  "core/block-editor": [
    { name: "getBlock", description: "Get a block by its client ID" },
    { name: "getBlocks", description: "Get all blocks" },
    { name: "getBlockCount", description: "Get the total number of blocks" },
    {
      name: "getSelectedBlock",
      description: "Get the currently selected block",
    },
    { name: "getBlockOrder", description: "Get the order of blocks" },
  ],
  "core/editor": [
    { name: "getCurrentPost", description: "Get the current post object" },
    { name: "getCurrentPostId", description: "Get the current post ID" },
    {
      name: "getEditedPostAttribute",
      description: "Get a specific attribute of the edited post",
    },
    {
      name: "getEditedPostContent",
      description: "Get the content of the edited post",
    },
    {
      name: "isCurrentPostPublished",
      description: "Check if the current post is published",
    },
  ],
  "core/notices": [
    { name: "getNotices", description: "Get all notices" },
    { name: "getNoticesByStatus", description: "Get notices by status" },
  ],
  "core/interface": [
    {
      name: "getActiveComplementaryArea",
      description: "Get the active complementary area",
    },
    { name: "isFeatureActive", description: "Check if a feature is active" },
    { name: "isItemPinned", description: "Check if an item is pinned" },
  ],
  "core/data": [
    { name: "getEntityRecord", description: "Get a specific entity record" },
    { name: "getEntityRecords", description: "Get multiple entity records" },
    { name: "getEntityConfig", description: "Get entity configuration" },
  ],
  "core/edit-post": [
    { name: "getEditorMode", description: "Get the current editor mode" },
    {
      name: "isEditorSidebarOpened",
      description: "Check if the editor sidebar is opened",
    },
    { name: "isFeatureActive", description: "Check if a feature is active" },
  ],
  "core/edit-site": [
    {
      name: "getEditedPostId",
      description: "Get the ID of the post being edited",
    },
    {
      name: "getEditedPostType",
      description: "Get the type of the post being edited",
    },
    { name: "getTemplate", description: "Get the current template" },
  ],
  "core/navigation": [
    { name: "getNavigationPost", description: "Get the navigation post" },
    { name: "getSelectedMenuId", description: "Get the selected menu ID" },
  ],
  "core/preferences": [
    { name: "get", description: "Get a preference value" },
    { name: "isFeatureActive", description: "Check if a feature is active" },
  ],
  "core/rich-text": [
    { name: "getFormatTypes", description: "Get available format types" },
    { name: "getActiveFormat", description: "Get the active format" },
  ],
  "core/viewport": [
    {
      name: "isViewportMatch",
      description: "Check if the viewport matches a query",
    },
  ],
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "wp-data-stores" is now active!');

  // Register completion provider for JavaScript/TypeScript files
  const useSelectProvider = vscode.languages.registerCompletionItemProvider(
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

        // Check if we're in a useSelect call
        if (linePrefix.includes("useSelect")) {
          console.log("Found useSelect in line");

          // Check if we're inside a select() call
          const selectMatch = linePrefix.match(/select\(['"]([^'"]*)['"]\)/);
          console.log("Select match:", selectMatch);

          if (selectMatch && selectMatch[1]) {
            // We're inside a select() call with a store name
            const storeName = selectMatch[1];
            console.log("Store name:", storeName);

            const selectors = storeSelectors[storeName];
            console.log("Available selectors:", selectors);

            if (selectors) {
              return selectors.map((selector) => {
                const completionItem = new vscode.CompletionItem(
                  selector.name,
                  vscode.CompletionItemKind.Method
                );
                completionItem.detail = `Selector: ${selector.name}`;
                completionItem.documentation = new vscode.MarkdownString(
                  selector.description
                );
                return completionItem;
              });
            }
          } else {
            // We're at the store selection point
            console.log("Providing store suggestions");
            return dataStores.map((store) => {
              const completionItem = new vscode.CompletionItem(
                store,
                vscode.CompletionItemKind.Value
              );
              completionItem.detail = "WordPress Data Store";
              completionItem.documentation = new vscode.MarkdownString(
                `Select data from the ${store} store`
              );
              return completionItem;
            });
          }
        }

        return undefined;
      },
    },
    "'",
    '"',
    "."
  );

  context.subscriptions.push(useSelectProvider);

  // The command has been defined in the package.json file
  const disposable = vscode.commands.registerCommand(
    "wp-data-stores.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from wp-data-stores!");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
