// Store selectors mapping
export const storeSelectors: Record<
  string,
  Array<{ name: string; description: string }>
> = {
  core: [
    {
      name: "canUser",
      description: "Check if the current user can perform an action",
    },
    {
      name: "canUserEditEntityRecord",
      description: "Check if the current user can edit an entity record",
    },
    { name: "getAuthors", description: "Get all authors" },
    {
      name: "getAutosave",
      description: "Get an autosave for an entity record",
    },
    {
      name: "getAutosaves",
      description: "Get all autosaves for an entity record",
    },
    {
      name: "getBlockPatternCategories",
      description: "Get all block pattern categories",
    },
    { name: "getBlockPatterns", description: "Get all block patterns" },
    { name: "getCurrentTheme", description: "Get the current theme" },
    {
      name: "getCurrentThemeGlobalStylesRevisions",
      description: "Get the current theme's global styles revisions",
    },
    { name: "getCurrentUser", description: "Get the current user" },
    {
      name: "getDefaultTemplateId",
      description: "Get the default template ID",
    },
    {
      name: "getEditedEntityRecord",
      description: "Get an edited entity record",
    },
    { name: "getEmbedPreview", description: "Get an embed preview" },
    {
      name: "getEntitiesByKind",
      description: "Get all entities of a specific kind",
    },
    {
      name: "getEntitiesConfig",
      description: "Get the configuration for all entities",
    },
    { name: "getEntity", description: "Get an entity by its kind and name" },
    {
      name: "getEntityConfig",
      description: "Get the configuration for an entity",
    },
    { name: "getEntityRecord", description: "Get an entity record" },
    {
      name: "getEntityRecordEdits",
      description: "Get the edits for an entity record",
    },
    {
      name: "getEntityRecordNonTransientEdits",
      description: "Get the non-transient edits for an entity record",
    },
    { name: "getEntityRecords", description: "Get multiple entity records" },
    {
      name: "getEntityRecordsTotalItems",
      description: "Get the total number of items for entity records",
    },
    {
      name: "getEntityRecordsTotalPages",
      description: "Get the total number of pages for entity records",
    },
    {
      name: "getLastEntityDeleteError",
      description: "Get the last entity delete error",
    },
    {
      name: "getLastEntitySaveError",
      description: "Get the last entity save error",
    },
    { name: "getRawEntityRecord", description: "Get a raw entity record" },
    { name: "getRedoEdit", description: "Get the next redo edit" },
    {
      name: "getReferenceByDistinctEdits",
      description: "Get a reference by distinct edits",
    },
    { name: "getRevision", description: "Get a revision" },
    { name: "getRevisions", description: "Get all revisions" },
    { name: "getThemeSupports", description: "Get theme supports" },
    { name: "getUndoEdit", description: "Get the next undo edit" },
    {
      name: "getUserPatternCategories",
      description: "Get user pattern categories",
    },
    { name: "getUserQueryResults", description: "Get user query results" },
    {
      name: "hasEditsForEntityRecord",
      description: "Check if there are edits for an entity record",
    },
    { name: "hasEntityRecords", description: "Check if entity records exist" },
    {
      name: "hasFetchedAutosaves",
      description: "Check if autosaves have been fetched",
    },
    { name: "hasRedo", description: "Check if there are redo edits" },
    { name: "hasUndo", description: "Check if there are undo edits" },
    {
      name: "isAutosavingEntityRecord",
      description: "Check if an entity record is being autosaved",
    },
    {
      name: "isDeletingEntityRecord",
      description: "Check if an entity record is being deleted",
    },
    {
      name: "isPreviewEmbedFallback",
      description: "Check if an embed preview is a fallback",
    },
    {
      name: "isRequestingEmbedPreview",
      description: "Check if an embed preview is being requested",
    },
    {
      name: "isSavingEntityRecord",
      description: "Check if an entity record is being saved",
    },
  ],
  "core/block-editor": [
    { name: "getBlock", description: "Get a block by its client ID" },
    { name: "getBlocks", description: "Get all blocks in the editor" },
    { name: "getBlockCount", description: "Get the total number of blocks" },
    { name: "getBlockOrder", description: "Get the order of blocks" },
    {
      name: "getBlockRootClientId",
      description: "Get the root client ID of a block",
    },
    {
      name: "getBlockSelectionStart",
      description: "Get the starting point of block selection",
    },
    {
      name: "getBlockSelectionEnd",
      description: "Get the ending point of block selection",
    },
    {
      name: "getBlockIndex",
      description: "Get the index of a block in its parent",
    },
    {
      name: "getBlockInsertionPoint",
      description: "Get the current block insertion point",
    },
    {
      name: "getBlockListSettings",
      description: "Get the settings for a block list",
    },
    { name: "getBlockName", description: "Get the name of a block" },
    {
      name: "getBlockAttributes",
      description: "Get the attributes of a block",
    },
    { name: "getBlockContent", description: "Get the content of a block" },
    {
      name: "getBlockParents",
      description: "Get the parent blocks of a block",
    },
    {
      name: "getBlockHierarchyRootClientId",
      description: "Get the root client ID of a block hierarchy",
    },
    {
      name: "getSelectedBlock",
      description: "Get the currently selected block",
    },
    {
      name: "getSelectedBlockClientId",
      description: "Get the client ID of the selected block",
    },
    {
      name: "getSelectedBlockCount",
      description: "Get the number of selected blocks",
    },
    {
      name: "getMultiSelectedBlockClientIds",
      description: "Get the client IDs of multiple selected blocks",
    },
    {
      name: "getFirstMultiSelectedBlockClientId",
      description: "Get the first selected block's client ID",
    },
    {
      name: "getLastMultiSelectedBlockClientId",
      description: "Get the last selected block's client ID",
    },
    {
      name: "getPreviousBlockClientId",
      description: "Get the previous block's client ID",
    },
    {
      name: "getNextBlockClientId",
      description: "Get the next block's client ID",
    },
    {
      name: "getBlockMode",
      description: "Get the mode of a block (visual/HTML)",
    },
    { name: "isBlockSelected", description: "Check if a block is selected" },
    { name: "hasSelectedBlock", description: "Check if any block is selected" },
    {
      name: "isBlockMultiSelected",
      description: "Check if a block is part of a multi-selection",
    },
    { name: "isBlockValid", description: "Check if a block is valid" },
    {
      name: "isBlockWithinSelection",
      description: "Check if a block is within the current selection",
    },
    {
      name: "isTypingWithinBlock",
      description: "Check if the user is typing within a block",
    },
    {
      name: "isBlockHovered",
      description: "Check if a block is being hovered",
    },
    {
      name: "isBlockHighlighted",
      description: "Check if a block is highlighted",
    },
    { name: "isBlockFocused", description: "Check if a block is focused" },
    { name: "isBlockMoving", description: "Check if a block is being moved" },
    {
      name: "isBlockBeingDragged",
      description: "Check if a block is being dragged",
    },
    {
      name: "isBlockBeingDropped",
      description: "Check if a block is being dropped",
    },
    {
      name: "isBlockBeingResized",
      description: "Check if a block is being resized",
    },
    {
      name: "isBlockBeingTransformed",
      description: "Check if a block is being transformed",
    },
    {
      name: "isBlockBeingReplaced",
      description: "Check if a block is being replaced",
    },
    {
      name: "isBlockBeingRemoved",
      description: "Check if a block is being removed",
    },
    {
      name: "isBlockBeingInserted",
      description: "Check if a block is being inserted",
    },
    {
      name: "isBlockBeingMoved",
      description: "Check if a block is being moved",
    },
    {
      name: "isBlockBeingCopied",
      description: "Check if a block is being copied",
    },
    {
      name: "isBlockBeingPasted",
      description: "Check if a block is being pasted",
    },
    {
      name: "isBlockBeingDuplicated",
      description: "Check if a block is being duplicated",
    },
    {
      name: "isBlockBeingSplit",
      description: "Check if a block is being split",
    },
    {
      name: "isBlockBeingMerged",
      description: "Check if a block is being merged",
    },
    {
      name: "isBlockBeingTransformedTo",
      description: "Check if a block is being transformed to another type",
    },
    {
      name: "isBlockBeingTransformedFrom",
      description: "Check if a block is being transformed from another type",
    },
    {
      name: "isBlockBeingTransformedBetween",
      description: "Check if a block is being transformed between two types",
    },
    {
      name: "isBlockBeingTransformedToBlocks",
      description: "Check if a block is being transformed to multiple blocks",
    },
    {
      name: "isBlockBeingTransformedFromBlocks",
      description: "Check if a block is being transformed from multiple blocks",
    },
    {
      name: "isBlockBeingTransformedBetweenBlocks",
      description:
        "Check if a block is being transformed between multiple blocks",
    },
    {
      name: "isBlockBeingTransformedToReusable",
      description: "Check if a block is being transformed to a reusable block",
    },
    {
      name: "isBlockBeingTransformedFromReusable",
      description:
        "Check if a block is being transformed from a reusable block",
    },
    {
      name: "isBlockBeingTransformedBetweenReusable",
      description:
        "Check if a block is being transformed between reusable blocks",
    },
    {
      name: "isBlockBeingTransformedToTemplate",
      description: "Check if a block is being transformed to a template",
    },
    {
      name: "isBlockBeingTransformedFromTemplate",
      description: "Check if a block is being transformed from a template",
    },
    {
      name: "isBlockBeingTransformedBetweenTemplate",
      description: "Check if a block is being transformed between templates",
    },
    {
      name: "isBlockBeingTransformedToPattern",
      description: "Check if a block is being transformed to a pattern",
    },
    {
      name: "isBlockBeingTransformedFromPattern",
      description: "Check if a block is being transformed from a pattern",
    },
    {
      name: "isBlockBeingTransformedBetweenPattern",
      description: "Check if a block is being transformed between patterns",
    },
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
