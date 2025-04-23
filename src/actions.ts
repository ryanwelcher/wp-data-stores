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
  "core/annotations": [
    { name: "addAnnotation", description: "Add an annotation" },
    { name: "removeAnnotation", description: "Remove an annotation" },
    { name: "setAnnotations", description: "Set multiple annotations" },
  ],
  "core/block-directory": [
    {
      name: "addInstalledBlockType",
      description:
        "Returns an action object used to add a block type to the 'newly installed' tracking list",
    },
    {
      name: "clearErrorNotice",
      description: "Sets the error notice to empty for specific block",
    },
    {
      name: "fetchDownloadableBlocks",
      description:
        "Returns an action object used in signalling that the downloadable blocks have been requested and are loading",
    },
    {
      name: "installBlockType",
      description: "Action triggered to install a block plugin",
    },
    {
      name: "receiveDownloadableBlocks",
      description:
        "Returns an action object used in signalling that the downloadable blocks have been updated",
    },
    {
      name: "removeInstalledBlockType",
      description:
        "Returns an action object used to remove a block type from the 'newly installed' tracking list",
    },
    {
      name: "setErrorNotice",
      description:
        "Sets an error notice to be displayed to the user for a given block",
    },
    {
      name: "setIsInstalling",
      description:
        "Returns an action object used to indicate install in progress",
    },
    {
      name: "uninstallBlockType",
      description: "Action triggered to uninstall a block plugin",
    },
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
  "core/blocks": [
    { name: "addBlockTypes", description: "Add block types" },
    { name: "removeBlockTypes", description: "Remove block types" },
    { name: "setBlockCategories", description: "Set block categories" },
    { name: "setDefaultBlockName", description: "Set default block name" },
    {
      name: "setFreeformContentHandlerName",
      description: "Set freeform content handler name",
    },
    {
      name: "setUnregisteredTypeHandlerName",
      description: "Set unregistered type handler name",
    },
    { name: "setGroupingBlockName", description: "Set grouping block name" },
    { name: "updateBlockSettings", description: "Update block settings" },
    {
      name: "updateBlockTypeSettings",
      description: "Update block type settings",
    },
    {
      name: "reapplyBlockTypeFilters",
      description: "Reapplies block type filters",
    },
  ],
  "core/commands": [
    { name: "close", description: "Closes the command palette" },
    { name: "open", description: "Opens the command palette" },
    {
      name: "registerCommand",
      description: "Returns an action object used to register a new command",
    },
    { name: "registerCommandLoader", description: "Register command loader" },
    {
      name: "unregisterCommand",
      description: "Returns an action object used to unregister a command",
    },
    {
      name: "unregisterCommandLoader",
      description: "Unregister command loader hook",
    },
  ],
  "core/customize-widgets": [
    {
      name: "setIsInserterOpened",
      description: "Returns an action object used to open/close the inserter",
    },
  ],
  "core/edit-post": [
    {
      name: "closeGeneralSidebar",
      description:
        "Returns an action object signalling that the user closed the sidebar",
    },
    {
      name: "closeModal",
      description:
        "Returns an action object signalling that the user closed a modal",
    },
    {
      name: "closePublishSidebar",
      description:
        "Returns an action object used in signalling that the user closed the publish sidebar",
    },
    {
      name: "hideBlockTypes",
      description: "Returns an action object used to hide block types",
    },
    {
      name: "initializeMetaBoxes",
      description: "Returns an action object used to initialize meta boxes",
    },
    {
      name: "metaBoxUpdatesFailure",
      description:
        "Returns an action object used to signal that meta box updates failed",
    },
    {
      name: "metaBoxUpdatesSuccess",
      description:
        "Returns an action object used to signal that meta box updates succeeded",
    },
    {
      name: "openGeneralSidebar",
      description:
        "Returns an action object signalling that the user opened the sidebar",
    },
    {
      name: "openModal",
      description:
        "Returns an action object signalling that the user opened a modal",
    },
    {
      name: "openPublishSidebar",
      description:
        "Returns an action object used in signalling that the user opened the publish sidebar",
    },
    {
      name: "removeEditorPanel",
      description: "Returns an action object used to remove an editor panel",
    },
    {
      name: "requestMetaBoxUpdates",
      description: "Returns an action object used to request meta box updates",
    },
    {
      name: "setAvailableMetaBoxesPerLocation",
      description:
        "Returns an action object used to set the available meta boxes per location",
    },
    {
      name: "setIsEditingTemplate",
      description:
        "Returns an action object used to set whether the template is being edited",
    },
    {
      name: "setIsInserterOpened",
      description:
        "Returns an action object used to set whether the inserter is opened",
    },
    {
      name: "setIsListViewOpened",
      description:
        "Returns an action object used to set whether the list view is opened",
    },
    {
      name: "showBlockTypes",
      description: "Returns an action object used to show block types",
    },
    {
      name: "switchEditorMode",
      description: "Returns an action object used to switch the editor mode",
    },
    {
      name: "toggleDistractionFree",
      description:
        "Returns an action object used to toggle distraction free mode",
    },
    {
      name: "toggleEditorPanelEnabled",
      description:
        "Returns an action object used to toggle whether an editor panel is enabled",
    },
    {
      name: "toggleEditorPanelOpened",
      description:
        "Returns an action object used to toggle whether an editor panel is opened",
    },
    {
      name: "toggleFeature",
      description: "Returns an action object used to toggle a feature",
    },
    {
      name: "toggleFullscreenMode",
      description: "Returns an action object used to toggle fullscreen mode",
    },
    {
      name: "togglePinnedPluginItem",
      description:
        "Returns an action object used to toggle whether a plugin item is pinned",
    },
    {
      name: "togglePublishSidebar",
      description:
        "Returns an action object used to toggle the publish sidebar",
    },
    {
      name: "updatePreferredStyleVariations",
      description:
        "Returns an action object used to update preferred style variations",
    },
  ],
  "core/edit-site": [
    {
      name: "addTemplate",
      description:
        "Action that adds a new template and sets it as the current template",
    },
    {
      name: "closeGeneralSidebar",
      description: "Action that closes the sidebar",
    },
    {
      name: "openGeneralSidebar",
      description: "Action that opens an editor sidebar",
    },
    {
      name: "openNavigationPanelToMenu",
      description:
        "Opens the navigation panel and sets its active menu at the same time",
    },
    { name: "removeTemplate", description: "Action that removes a template" },
    {
      name: "revertTemplate",
      description: "Reverts a template to its original theme-provided file",
    },
    {
      name: "setEditedEntity",
      description: "Action that sets an edited entity",
    },
    {
      name: "setEditedPostContext",
      description: "Set's the current block editor context",
    },
    {
      name: "setHasPageContentFocus",
      description:
        "Sets whether or not the editor allows only page content to be edited",
    },
    {
      name: "setIsInserterOpened",
      description: "Returns an action object used to open/close the inserter",
    },
    {
      name: "setIsListViewOpened",
      description: "Returns an action object used to open/close the list view",
    },
    {
      name: "setIsNavigationPanelOpened",
      description: "Sets whether the navigation panel should be open",
    },
    {
      name: "setIsSaveViewOpened",
      description: "Sets whether the save view panel should be open",
    },
    {
      name: "setNavigationMenu",
      description: "Action that sets a navigation menu",
    },
    {
      name: "setNavigationPanelActiveMenu",
      description: "Action that sets the active navigation panel menu",
    },
    {
      name: "setPage",
      description: "Resolves the template for a page and displays both",
    },
    {
      name: "setTemplate",
      description:
        "Action that sets a template, optionally fetching it from REST API",
    },
    {
      name: "setTemplatePart",
      description: "Action that sets a template part",
    },
    {
      name: "switchEditorMode",
      description: "Triggers an action used to switch editor mode",
    },
    {
      name: "toggleDistractionFree",
      description: "Action that toggles Distraction free mode",
    },
    { name: "toggleFeature", description: "Action that toggles a feature" },
    {
      name: "updateSettings",
      description: "Action that updates the site editor settings",
    },
  ],
  "core/editor": [
    { name: "autosave", description: "Autosaves the current post" },
    { name: "clearSelectedBlock", description: "Clears the selected block" },
    { name: "closePublishSidebar", description: "Closes the publish sidebar" },
    { name: "createUndoLevel", description: "Creates an undo level" },
    {
      name: "disablePublishSidebar",
      description: "Disables the publish sidebar",
    },
    { name: "editPost", description: "Edits the current post" },
    {
      name: "enablePublishSidebar",
      description: "Enables the publish sidebar",
    },
    { name: "enterFormattedText", description: "Enters formatted text mode" },
    { name: "exitFormattedText", description: "Exits formatted text mode" },
    {
      name: "hideInsertionPoint",
      description: "Hides the block insertion point",
    },
    {
      name: "insertBlock",
      description: "Inserts a block at the specified position",
    },
    {
      name: "insertBlocks",
      description: "Inserts multiple blocks at the specified position",
    },
    { name: "insertDefaultBlock", description: "Inserts the default block" },
    { name: "lockPostAutosaving", description: "Locks post autosaving" },
    { name: "lockPostSaving", description: "Locks post saving" },
    { name: "mergeBlocks", description: "Merges two blocks together" },
    { name: "moveBlocksDown", description: "Moves blocks down" },
    { name: "moveBlocksUp", description: "Moves blocks up" },
    {
      name: "moveBlockToPosition",
      description: "Moves a block to a specific position",
    },
    { name: "multiSelect", description: "Selects multiple blocks" },
    { name: "openPublishSidebar", description: "Opens the publish sidebar" },
    { name: "receiveBlocks", description: "Receives blocks from the server" },
    { name: "redo", description: "Redoes the last undone edit" },
    { name: "refreshPost", description: "Refreshes the current post" },
    { name: "removeBlock", description: "Removes a block by its client ID" },
    {
      name: "removeBlocks",
      description: "Removes multiple blocks by their client IDs",
    },
    { name: "removeEditorPanel", description: "Removes an editor panel" },
    {
      name: "replaceBlock",
      description: "Replaces a block with another block",
    },
    {
      name: "replaceBlocks",
      description: "Replaces multiple blocks with other blocks",
    },
    {
      name: "resetBlocks",
      description: "Resets all blocks to their initial state",
    },
    { name: "resetEditorBlocks", description: "Resets the editor blocks" },
    { name: "resetPost", description: "Resets the current post" },
    { name: "savePost", description: "Saves the current post" },
    { name: "selectBlock", description: "Selects a block by its client ID" },
    { name: "setDeviceType", description: "Sets the device type" },
    { name: "setEditedPost", description: "Sets the edited post" },
    {
      name: "setIsInserterOpened",
      description: "Sets whether the inserter is opened",
    },
    {
      name: "setIsListViewOpened",
      description: "Sets whether the list view is opened",
    },
    { name: "setRenderingMode", description: "Sets the rendering mode" },
    { name: "setTemplateValidity", description: "Sets the template validity" },
    { name: "setupEditor", description: "Sets up the editor" },
    { name: "setupEditorState", description: "Sets up the editor state" },
    {
      name: "showInsertionPoint",
      description: "Shows the block insertion point",
    },
    { name: "startMultiSelect", description: "Starts multi-selection mode" },
    { name: "startTyping", description: "Starts typing mode" },
    { name: "stopMultiSelect", description: "Stops multi-selection mode" },
    { name: "stopTyping", description: "Stops typing mode" },
    { name: "switchEditorMode", description: "Switches the editor mode" },
    {
      name: "synchronizeTemplate",
      description: "Synchronizes the template with the blocks",
    },
    {
      name: "toggleBlockMode",
      description: "Toggles between visual and HTML mode for a block",
    },
    {
      name: "toggleDistractionFree",
      description: "Toggles distraction-free mode",
    },
    {
      name: "toggleEditorPanelEnabled",
      description: "Toggles whether an editor panel is enabled",
    },
    {
      name: "toggleEditorPanelOpened",
      description: "Toggles whether an editor panel is opened",
    },
    {
      name: "togglePublishSidebar",
      description: "Toggles the publish sidebar",
    },
    { name: "toggleSelection", description: "Toggles selection mode" },
    { name: "toggleSpotlightMode", description: "Toggles spotlight mode" },
    { name: "toggleTopToolbar", description: "Toggles the top toolbar" },
    { name: "trashPost", description: "Moves the current post to trash" },
    { name: "undo", description: "Undoes the last edit" },
    { name: "unlockPostAutosaving", description: "Unlocks post autosaving" },
    { name: "unlockPostSaving", description: "Unlocks post saving" },
    { name: "updateBlock", description: "Updates a block's attributes" },
    {
      name: "updateBlockAttributes",
      description: "Updates a block's attributes",
    },
    {
      name: "updateBlockListSettings",
      description: "Updates the settings for a block list",
    },
    {
      name: "updateEditorSettings",
      description: "Updates the editor settings",
    },
    { name: "updatePost", description: "Updates the current post" },
    { name: "updatePostLock", description: "Updates the post lock" },
  ],
  "core/keyboard-shortcuts": [
    {
      name: "registerShortcut",
      description: "Registers a new keyboard shortcut",
    },
    {
      name: "unregisterShortcut",
      description: "Unregisters a keyboard shortcut",
    },
  ],
  "core/notices": [
    {
      name: "createErrorNotice",
      description:
        "Returns an action object used in signalling that an error notice is to be created",
    },
    {
      name: "createInfoNotice",
      description:
        "Returns an action object used in signalling that an info notice is to be created",
    },
    {
      name: "createNotice",
      description:
        "Returns an action object used in signalling that a notice is to be created",
    },
    {
      name: "createSuccessNotice",
      description:
        "Returns an action object used in signalling that a success notice is to be created",
    },
    {
      name: "createWarningNotice",
      description:
        "Returns an action object used in signalling that a warning notice is to be created",
    },
    {
      name: "removeAllNotices",
      description:
        "Removes all notices from a given context. Defaults to the default context",
    },
    {
      name: "removeNotice",
      description:
        "Returns an action object used in signalling that a notice is to be removed",
    },
    { name: "removeNotices", description: "Removes notices by context" },
  ],
  "core/nux": [
    {
      name: "disableTips",
      description:
        "Returns an action object that, when dispatched, prevents all tips from showing again",
    },
    {
      name: "dismissTip",
      description:
        "Returns an action object that, when dispatched, dismisses the given tip. A dismissed tip will not show again",
    },
    {
      name: "enableTips",
      description:
        "Returns an action object that, when dispatched, makes all tips show again",
    },
    {
      name: "triggerGuide",
      description:
        "Returns an action object that, when dispatched, presents a guide that takes the user through a series of tips step by step",
    },
  ],
  "core/preferences": [
    {
      name: "set",
      description:
        "Returns an action object used in signalling that a preference should be set to a value",
    },
    {
      name: "setDefaults",
      description:
        "Returns an action object used in signalling that preference defaults should be set",
    },
    {
      name: "setPersistenceLayer",
      description:
        "Sets the persistence layer. When a persistence layer is set, the preferences store will call get immediately and update the store state to the value returned, and call set with all preferences whenever a preference changes value",
    },
    {
      name: "toggle",
      description:
        "Returns an action object used in signalling that a preference should be toggled",
    },
  ],
  "core/rich-text": [
    { name: "applyFormat", description: "Apply a format to the selected text" },
    {
      name: "removeFormat",
      description: "Remove a format from the selected text",
    },
  ],
  "core/viewport": [],
  "core/edit-widgets": [
    {
      name: "closeGeneralSidebar",
      description:
        "Returns an action object signalling that the user closed the sidebar",
    },
    {
      name: "moveBlockToWidgetArea",
      description: "Action that handles moving a block between widget areas",
    },
    {
      name: "persistStubPost",
      description: "Persists a stub post with given ID to core data store",
    },
    {
      name: "saveEditedWidgetAreas",
      description:
        "Converts all the blocks from edited widget areas into widgets, and submits a batch request to save everything at once",
    },
    {
      name: "saveWidgetArea",
      description:
        "Converts all the blocks from a widget area specified by ID into widgets, and submits a batch request to save everything at once",
    },
    {
      name: "saveWidgetAreas",
      description:
        "Converts all the blocks from specified widget areas into widgets, and submits a batch request to save everything at once",
    },
    {
      name: "setIsInserterOpened",
      description: "Returns an action object used to open/close the inserter",
    },
    {
      name: "setIsListViewOpened",
      description: "Returns an action object used to open/close the list view",
    },
    {
      name: "setIsWidgetAreaOpen",
      description: "Sets the open state of the widget area",
    },
    {
      name: "setWidgetAreasOpenState",
      description: "Sets the open state of all the widget areas",
    },
    {
      name: "setWidgetIdForClientId",
      description: "Sets the clientId stored for a particular widgetId",
    },
  ],
};
