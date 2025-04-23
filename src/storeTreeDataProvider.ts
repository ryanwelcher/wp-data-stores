import * as vscode from "vscode";
import { dataStores } from "./stores";
import { storeSelectors } from "./selectors";
import { storeActions } from "./actions";

export class StoreTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly description?: string,
    public readonly tooltip?: string,
    public readonly command?: vscode.Command,
    public readonly parent?: string,
    public readonly isDisabled?: boolean
  ) {
    super(label, collapsibleState);
    this.description = description;
    this.tooltip = tooltip;
    this.command = command;
    if (isDisabled) {
      this.contextValue = "disabled";
    }
  }
}

export class StoreTreeDataProvider
  implements vscode.TreeDataProvider<StoreTreeItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    StoreTreeItem | undefined | null | void
  > = new vscode.EventEmitter<StoreTreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<
    StoreTreeItem | undefined | null | void
  > = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: StoreTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: StoreTreeItem): Thenable<StoreTreeItem[]> {
    if (!element) {
      // Root level - show all stores
      return Promise.resolve(
        dataStores.map(
          (store) =>
            new StoreTreeItem(
              store,
              vscode.TreeItemCollapsibleState.Collapsed,
              undefined,
              `WordPress ${store} store`
            )
        )
      );
    }

    // If we're at a store level
    if (dataStores.includes(element.label)) {
      const storeName = element.label;
      const selectors = storeSelectors[storeName] || [];
      const actions = storeActions[storeName] || [];

      return Promise.resolve([
        new StoreTreeItem(
          "Selectors",
          selectors.length > 0
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None,
          `${selectors.length} available`,
          "Store selectors",
          undefined,
          storeName,
          selectors.length === 0
        ),
        new StoreTreeItem(
          "Actions",
          actions.length > 0
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None,
          `${actions.length} available`,
          "Store actions",
          undefined,
          storeName,
          actions.length === 0
        ),
      ]);
    }

    // If we're at the selectors level
    if (element.label === "Selectors" && element.parent) {
      const selectors = storeSelectors[element.parent] || [];
      return Promise.resolve(
        selectors.map(
          (selector) =>
            new StoreTreeItem(
              selector.name,
              vscode.TreeItemCollapsibleState.None,
              undefined,
              selector.description
            )
        )
      );
    }

    // If we're at the actions level
    if (element.label === "Actions" && element.parent) {
      const actions = storeActions[element.parent] || [];
      return Promise.resolve(
        actions.map(
          (action) =>
            new StoreTreeItem(
              action.name,
              vscode.TreeItemCollapsibleState.None,
              undefined,
              action.description
            )
        )
      );
    }

    return Promise.resolve([]);
  }
}
