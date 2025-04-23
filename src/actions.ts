// Store dispatch actions mapping
export const storeActions: Record<
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
