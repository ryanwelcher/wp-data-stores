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

// Store dispatch actions mapping
const storeActions: Record<
  string,
  Array<{ name: string; description: string }>
> = {
  "core/block-editor": [
    {
      name: "insertBlock",
      description: "Insert a block at the specified position",
    },
    { name: "removeBlock", description: "Remove a block by its client ID" },
    { name: "moveBlock", description: "Move a block to a new position" },
    { name: "updateBlock", description: "Update a block's attributes" },
    { name: "selectBlock", description: "Select a block by its client ID" },
  ],
  "core/editor": [
    { name: "editPost", description: "Edit the current post" },
    { name: "savePost", description: "Save the current post" },
    { name: "trashPost", description: "Move the current post to trash" },
    { name: "updatePost", description: "Update the current post" },
    { name: "lockPostSaving", description: "Lock post saving" },
  ],
  "core/notices": [
    { name: "createNotice", description: "Create a new notice" },
    { name: "removeNotice", description: "Remove a notice by its ID" },
    { name: "removeAllNotices", description: "Remove all notices" },
  ],
  "core/interface": [
    {
      name: "enableComplementaryArea",
      description: "Enable a complementary area",
    },
    {
      name: "disableComplementaryArea",
      description: "Disable a complementary area",
    },
    { name: "pinItem", description: "Pin an item" },
    { name: "unpinItem", description: "Unpin an item" },
  ],
  "core/data": [
    { name: "addEntities", description: "Add entities to the store" },
    { name: "receiveEntityRecords", description: "Receive entity records" },
    { name: "saveEntityRecord", description: "Save an entity record" },
  ],
  "core/edit-post": [
    { name: "openGeneralSidebar", description: "Open the general sidebar" },
    { name: "closeGeneralSidebar", description: "Close the general sidebar" },
    { name: "toggleFeature", description: "Toggle a feature" },
  ],
  "core/edit-site": [
    { name: "setTemplate", description: "Set the current template" },
    { name: "setPage", description: "Set the current page" },
    {
      name: "setNavigationPanelActiveMenu",
      description: "Set the active menu in the navigation panel",
    },
  ],
  "core/navigation": [
    { name: "setSelectedMenuId", description: "Set the selected menu ID" },
    { name: "setNavigationPost", description: "Set the navigation post" },
  ],
  "core/preferences": [
    { name: "set", description: "Set a preference value" },
    { name: "toggle", description: "Toggle a preference" },
  ],
  "core/rich-text": [
    { name: "applyFormat", description: "Apply a format to the selected text" },
    {
      name: "removeFormat",
      description: "Remove a format from the selected text",
    },
  ],
  "core/viewport": [
    {
      name: "setIsMatching",
      description: "Set whether the viewport matches a query",
    },
  ],
};

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

        // Handle useSelect
        if (linePrefix.includes("useSelect")) {
          console.log("Found useSelect in line");

          // Check if we're inside a select() call with a store name
          const selectMatch = linePrefix.match(/select\(['"]([^'"]*)['"]\)\./);
          console.log("Select match:", selectMatch);

          if (selectMatch && selectMatch[1]) {
            // We're inside a select() call with a store name and dot
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
            // Check if we're at the store selection point
            const storeSelectionMatch = linePrefix.match(/select\(['"]/);
            if (storeSelectionMatch) {
              console.log("Providing store suggestions for useSelect");
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
        }

        // Handle useDispatch
        if (linePrefix.includes("useDispatch")) {
          console.log("Found useDispatch in line");

          // Check if we're in a destructuring pattern
          const destructuringMatch = linePrefix.match(/\{\s*([^}]*)\s*\}/);
          console.log("Destructuring match:", destructuringMatch);

          if (destructuringMatch) {
            // We're in a destructuring pattern, provide action names
            const storeMatch = linePrefix.match(
              /useDispatch\(\s*['"]([^'"]*)['"]\s*\)/
            );
            console.log("Store match:", storeMatch);

            if (storeMatch && storeMatch[1]) {
              const storeName = storeMatch[1];
              const actions = storeActions[storeName];

              if (actions) {
                return actions.map((action) => {
                  const completionItem = new vscode.CompletionItem(
                    action.name,
                    vscode.CompletionItemKind.Method
                  );
                  completionItem.detail = `Action: ${action.name}`;
                  completionItem.documentation = new vscode.MarkdownString(
                    action.description
                  );
                  return completionItem;
                });
              }
            }
          } else {
            // We're at the store selection point
            console.log("Providing store suggestions for useDispatch");
            return dataStores.map((store) => {
              const completionItem = new vscode.CompletionItem(
                store,
                vscode.CompletionItemKind.Value
              );
              completionItem.detail = "WordPress Data Store";
              completionItem.documentation = new vscode.MarkdownString(
                `Dispatch actions from the ${store} store`
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
    ".",
    "{",
    "}"
  );

  context.subscriptions.push(hooksProvider);

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
