// Store dispatch actions mapping
export const storeActions: Record<
  string,
  Array<{ name: string; description: string }>
> = {
  core: [
    { name: "addEntities", description: "Add entities to the store" },
    { name: "deleteEntityRecord", description: "Delete an entity record" },
    { name: "editEntityRecord", description: "Edit an entity record" },
    {
      name: "receiveDefaultTemplateId",
      description: "Receive the default template ID",
    },
    { name: "receiveEntityRecords", description: "Receive entity records" },
    {
      name: "receiveNavigationFallbackId",
      description: "Receive the navigation fallback ID",
    },
    { name: "receiveRevisions", description: "Receive revisions" },
    { name: "receiveThemeSupports", description: "Receive theme supports" },
    {
      name: "receiveUploadPermissions",
      description: "Receive upload permissions",
    },
    { name: "redo", description: "Redo the last undone edit" },
    {
      name: "saveEditedEntityRecord",
      description: "Save an edited entity record",
    },
    { name: "saveEntityRecord", description: "Save an entity record" },
    { name: "undo", description: "Undo the last edit" },
  ],
  "core/block-editor": [
    {
      name: "insertBlock",
      description: "Insert a block at the specified position",
    },
    {
      name: "insertBlocks",
      description: "Insert multiple blocks at the specified position",
    },
    { name: "moveBlock", description: "Move a block to a new position" },
    {
      name: "moveBlocks",
      description: "Move multiple blocks to a new position",
    },
    { name: "removeBlock", description: "Remove a block by its client ID" },
    {
      name: "removeBlocks",
      description: "Remove multiple blocks by their client IDs",
    },
    { name: "replaceBlock", description: "Replace a block with another block" },
    {
      name: "replaceBlocks",
      description: "Replace multiple blocks with other blocks",
    },
    { name: "selectBlock", description: "Select a block by its client ID" },
    { name: "selectNextBlock", description: "Select the next block" },
    { name: "selectPreviousBlock", description: "Select the previous block" },
    { name: "clearSelectedBlock", description: "Clear the selected block" },
    { name: "multiSelect", description: "Select multiple blocks" },
    { name: "startMultiSelect", description: "Start multi-selection mode" },
    { name: "stopMultiSelect", description: "Stop multi-selection mode" },
    {
      name: "toggleBlockMode",
      description: "Toggle between visual and HTML mode for a block",
    },
    { name: "updateBlock", description: "Update a block's attributes" },
    {
      name: "updateBlockAttributes",
      description: "Update a block's attributes",
    },
    {
      name: "updateBlockListSettings",
      description: "Update the settings for a block list",
    },
    {
      name: "resetBlocks",
      description: "Reset all blocks to their initial state",
    },
    { name: "resetBlock", description: "Reset a block to its initial state" },
    { name: "receiveBlocks", description: "Receive blocks from the server" },
    {
      name: "synchronizeTemplate",
      description: "Synchronize the template with the blocks",
    },
    { name: "mergeBlocks", description: "Merge two blocks together" },
    { name: "splitBlock", description: "Split a block into two blocks" },
    { name: "duplicateBlock", description: "Duplicate a block" },
    { name: "duplicateBlocks", description: "Duplicate multiple blocks" },
    { name: "copyBlock", description: "Copy a block to the clipboard" },
    {
      name: "copyBlocks",
      description: "Copy multiple blocks to the clipboard",
    },
    { name: "pasteBlock", description: "Paste a block from the clipboard" },
    {
      name: "pasteBlocks",
      description: "Paste multiple blocks from the clipboard",
    },
    {
      name: "transformBlock",
      description: "Transform a block to another type",
    },
    {
      name: "transformBlocks",
      description: "Transform multiple blocks to another type",
    },
    {
      name: "transformBlockToReusable",
      description: "Transform a block to a reusable block",
    },
    {
      name: "transformBlocksToReusable",
      description: "Transform multiple blocks to reusable blocks",
    },
    {
      name: "transformBlockToTemplate",
      description: "Transform a block to a template",
    },
    {
      name: "transformBlocksToTemplate",
      description: "Transform multiple blocks to a template",
    },
    {
      name: "transformBlockToPattern",
      description: "Transform a block to a pattern",
    },
    {
      name: "transformBlocksToPattern",
      description: "Transform multiple blocks to a pattern",
    },
    {
      name: "setTemplateValidity",
      description: "Set the validity of the template",
    },
    { name: "setTemplate", description: "Set the template for the editor" },
    {
      name: "setRenderingMode",
      description: "Set the rendering mode for the editor",
    },
    {
      name: "setBlockMovingClientId",
      description: "Set the client ID of the block being moved",
    },
    {
      name: "setBlockDraggingClientId",
      description: "Set the client ID of the block being dragged",
    },
    {
      name: "setBlockDroppingClientId",
      description: "Set the client ID of the block being dropped",
    },
    {
      name: "setBlockResizingClientId",
      description: "Set the client ID of the block being resized",
    },
    {
      name: "setBlockTransformingClientId",
      description: "Set the client ID of the block being transformed",
    },
    {
      name: "setBlockReplacingClientId",
      description: "Set the client ID of the block being replaced",
    },
    {
      name: "setBlockRemovingClientId",
      description: "Set the client ID of the block being removed",
    },
    {
      name: "setBlockInsertingClientId",
      description: "Set the client ID of the block being inserted",
    },
    {
      name: "setBlockMovingClientIds",
      description: "Set the client IDs of the blocks being moved",
    },
    {
      name: "setBlockDraggingClientIds",
      description: "Set the client IDs of the blocks being dragged",
    },
    {
      name: "setBlockDroppingClientIds",
      description: "Set the client IDs of the blocks being dropped",
    },
    {
      name: "setBlockResizingClientIds",
      description: "Set the client IDs of the blocks being resized",
    },
    {
      name: "setBlockTransformingClientIds",
      description: "Set the client IDs of the blocks being transformed",
    },
    {
      name: "setBlockReplacingClientIds",
      description: "Set the client IDs of the blocks being replaced",
    },
    {
      name: "setBlockRemovingClientIds",
      description: "Set the client IDs of the blocks being removed",
    },
    {
      name: "setBlockInsertingClientIds",
      description: "Set the client IDs of the blocks being inserted",
    },
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
