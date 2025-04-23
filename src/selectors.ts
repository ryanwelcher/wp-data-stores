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
    { name: "getUploadPermissions", description: "Get upload permissions" },
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
    {
      name: "isResolving",
      description: "Check if a selector is being resolved",
    },
  ],
  "core/annotations": [
    { name: "getAnnotations", description: "Get all annotations" },
    {
      name: "getAnnotationsForBlock",
      description: "Get annotations for a specific block",
    },
  ],
  "core/block-directory": [
    {
      name: "getDownloadableBlocks",
      description: "Returns the available uninstalled blocks",
    },
    {
      name: "getErrorNoticeForBlock",
      description: "Returns the error notice for a given block",
    },
    { name: "getErrorNotices", description: "Returns all block error notices" },
    {
      name: "getInstalledBlockTypes",
      description:
        "Returns the block types that have been installed on the server in this session",
    },
    {
      name: "getNewBlockTypes",
      description:
        "Returns block types that have been installed on the server and used in the current post",
    },
    {
      name: "getUnusedBlockTypes",
      description:
        "Returns the block types that have been installed on the server but are not used in the current post",
    },
    {
      name: "isInstalling",
      description: "Returns true if a block plugin install is in progress",
    },
    {
      name: "isRequestingDownloadableBlocks",
      description:
        "Returns true if application is requesting for downloadable blocks",
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
  "core/blocks": [
    {
      name: "getActiveBlockVariation",
      description:
        "Returns the active block variation for a given block based on its attributes",
    },
    {
      name: "getBlockStyles",
      description: "Returns block styles by block name",
    },
    {
      name: "getBlockSupport",
      description: "Returns the block support value for a feature, if defined",
    },
    { name: "getBlockType", description: "Returns a block type by name" },
    {
      name: "getBlockTypes",
      description: "Returns all the available block types",
    },
    {
      name: "getBlockVariations",
      description: "Returns block variations by block name",
    },
    {
      name: "getCategories",
      description: "Returns all the available block categories",
    },
    {
      name: "getChildBlockNames",
      description: "Returns an array with the child blocks of a given block",
    },
    { name: "getCollections", description: "Returns the collections list" },
    {
      name: "getDefaultBlockName",
      description: "Returns the name of the default block name",
    },
    {
      name: "getDefaultBlockVariation",
      description: "Returns the default block variation",
    },
    {
      name: "getFreeformFallbackBlockName",
      description: "Returns the name of the freeform content handler block",
    },
    {
      name: "getGroupingBlockName",
      description: "Returns the name of the grouping block",
    },
    {
      name: "getUnregisteredFallbackBlockName",
      description: "Returns the name of the unregistered type handler block",
    },
    {
      name: "hasBlockSupport",
      description: "Returns true if the block supports the specified feature",
    },
    {
      name: "hasChildBlocks",
      description: "Returns true if the block has child blocks",
    },
    {
      name: "hasChildBlocksWithInserterSupport",
      description:
        "Returns true if the block has child blocks with inserter support",
    },
    {
      name: "isMatchingSearchTerm",
      description: "Returns true if the block matches the search term",
    },
  ],
  "core/commands": [
    {
      name: "getCommandLoaders",
      description: "Returns the registered command loaders",
    },
    {
      name: "getCommands",
      description: "Returns the registered static commands",
    },
    { name: "getContext", description: "Returns whether the active context" },
    {
      name: "isOpen",
      description: "Returns whether the command palette is open",
    },
  ],
  "core/customize-widgets": [
    {
      name: "isInserterOpened",
      description: "Returns true if the inserter is opened",
    },
  ],
  "core/edit-post": [
    {
      name: "areMetaBoxesInitialized",
      description: "Returns true if meta boxes are initialized",
    },
    {
      name: "getActiveGeneralSidebarName",
      description:
        "Returns the current active general sidebar name, or null if there is no general sidebar active",
    },
    {
      name: "getActiveMetaBoxLocations",
      description: "Returns an array of active meta box locations",
    },
    {
      name: "getAllMetaBoxes",
      description: "Returns the list of all the available meta boxes",
    },
    {
      name: "getEditedPostTemplate",
      description: "Retrieves the template of the currently edited post",
    },
    { name: "getEditorMode", description: "Returns the current editing mode" },
    {
      name: "getHiddenBlockTypes",
      description: "Returns an array of blocks that are hidden",
    },
    {
      name: "getMetaBoxesPerLocation",
      description:
        "Returns the list of all the available meta boxes for a given location",
    },
    {
      name: "getPreference",
      description: "Returns the preference value for the given key",
    },
    {
      name: "getPreferences",
      description:
        "Returns the preferences (these preferences are persisted locally)",
    },
    {
      name: "hasMetaBoxes",
      description: "Returns true if the post is using Meta Boxes",
    },
    {
      name: "isEditorSidebarOpened",
      description: "Returns true if the editor sidebar is opened",
    },
    {
      name: "isFeatureActive",
      description: "Returns whether the given feature is enabled or not",
    },
    {
      name: "isListViewOpened",
      description: "Returns true if the list view is opened",
    },
    {
      name: "isMetaBoxLocationActive",
      description:
        "Returns true if there is an active meta box in the given location",
    },
    {
      name: "isMetaBoxLocationVisible",
      description: "Returns true if a metabox location is active and visible",
    },
    {
      name: "isPluginItemPinned",
      description: "Returns true if the plugin item is pinned to the header",
    },
    {
      name: "isPluginSidebarOpened",
      description: "Returns true if the plugin sidebar is opened",
    },
    {
      name: "isSavingMetaBoxes",
      description: "Returns true if the Meta Boxes are being saved",
    },
  ],
  "core/edit-site": [
    {
      name: "getCanUserCreateMedia",
      description: "Returns whether the current user can create media or not",
    },
    {
      name: "getCurrentTemplateTemplateParts",
      description:
        "Returns the template parts and their blocks for the current edited template",
    },
    {
      name: "getEditedPostContext",
      description: "Returns the edited post's context object",
    },
    {
      name: "getEditedPostId",
      description:
        "Returns the ID of the currently edited template or template part",
    },
    {
      name: "getEditedPostType",
      description:
        "Returns the current edited post type (wp_template or wp_template_part)",
    },
    { name: "getEditorMode", description: "Returns the current editing mode" },
    { name: "getPage", description: "Returns the current page object" },
    {
      name: "getReusableBlocks",
      description: "Returns any available Reusable blocks",
    },
    { name: "getSettings", description: "Returns the site editor settings" },
    {
      name: "hasPageContentFocus",
      description:
        "Whether or not the editor allows only page content to be edited",
    },
    {
      name: "isFeatureActive",
      description: "Returns whether the given feature is enabled or not",
    },
    {
      name: "isInserterOpened",
      description: "Returns true if the inserter is opened",
    },
    {
      name: "isListViewOpened",
      description: "Returns true if the list view is opened",
    },
    {
      name: "isNavigationOpened",
      description: "Returns true if the navigation panel is opened",
    },
    {
      name: "isPage",
      description: "Whether or not the editor has a page loaded into it",
    },
    {
      name: "isSaveViewOpened",
      description: "Returns the current opened/closed state of the save panel",
    },
  ],
  "core/navigation": [
    { name: "getNavigationPost", description: "Get the navigation post" },
    { name: "getSelectedMenuId", description: "Get the selected menu ID" },
  ],
  "core/preferences": [
    {
      name: "get",
      description:
        "Returns a boolean indicating whether a prefer is active for a particular scope",
    },
    { name: "isFeatureActive", description: "Check if a feature is active" },
  ],
  "core/rich-text": [
    { name: "getFormatType", description: "Returns a format type by name" },
    {
      name: "getFormatTypeForBareElement",
      description:
        "Gets the format type, if any, that can handle a bare element (without a data-format-type attribute), given the tag name of this element",
    },
    {
      name: "getFormatTypeForClassName",
      description:
        "Gets the format type, if any, that can handle an element, given its classes",
    },
    {
      name: "getFormatTypes",
      description: "Returns all the available format types",
    },
    { name: "getActiveFormat", description: "Get the active format" },
  ],
  "core/viewport": [
    {
      name: "isViewportMatch",
      description: "Check if the viewport matches a query",
    },
  ],
  "core/edit-widgets": [
    {
      name: "canInsertBlockInWidgetArea",
      description: "Returns true if a block can be inserted into a widget area",
    },
    {
      name: "getEditedWidgetAreas",
      description: "Returns all edited widget area entity records",
    },
    {
      name: "getIsWidgetAreaOpen",
      description: "Gets whether the widget area is opened",
    },
    {
      name: "getParentWidgetAreaBlock",
      description:
        "Given a child client id, returns the parent widget area block",
    },
    {
      name: "getReferenceWidgetBlocks",
      description: "Returns all blocks representing reference widgets",
    },
    {
      name: "getWidget",
      description: "Returns API widget data for a particular widget ID",
    },
    {
      name: "getWidgetAreaForWidgetId",
      description:
        "Returns widgetArea containing a block identify by given widgetId",
    },
    { name: "getWidgetAreas", description: "Returns all API widget areas" },
    { name: "getWidgets", description: "Returns all API widgets" },
    {
      name: "isInserterOpened",
      description: "Returns true if the inserter is opened",
    },
    {
      name: "isListViewOpened",
      description: "Returns true if the list view is opened",
    },
    {
      name: "isSavingWidgetAreas",
      description: "Returns true if any widget area is currently being saved",
    },
  ],
  "core/editor": [
    {
      name: "canInsertBlockType",
      description: "Returns whether a block can be inserted",
    },
    {
      name: "canUserUseUnfilteredHTML",
      description:
        "Returns whether or not the user has the unfiltered_html capability",
    },
    {
      name: "didPostSaveRequestFail",
      description:
        "Returns true if a previous post save was attempted but failed",
    },
    {
      name: "didPostSaveRequestSucceed",
      description:
        "Returns true if a previous post save was attempted successfully",
    },
    { name: "getActivePostLock", description: "Returns the active post lock" },
    {
      name: "getAdjacentBlockClientId",
      description: "Returns the client ID of the adjacent block",
    },
    {
      name: "getAutosaveAttribute",
      description:
        "Returns an attribute value of the current autosave revision for a post",
    },
    { name: "getBlock", description: "Returns a block given its client ID" },
    {
      name: "getBlockAttributes",
      description: "Returns the attributes of a block given its client ID",
    },
    {
      name: "getBlockCount",
      description: "Returns the total number of blocks in the editor",
    },
    {
      name: "getBlockHierarchyRootClientId",
      description: "Returns the root client ID of the block hierarchy",
    },
    {
      name: "getBlockIndex",
      description: "Returns the index of a block in its parent",
    },
    {
      name: "getBlockInsertionPoint",
      description: "Returns the current block insertion point",
    },
    {
      name: "getBlockListSettings",
      description: "Returns the settings for a block list",
    },
    {
      name: "getBlockMode",
      description: "Returns the mode of a block (visual/HTML)",
    },
    {
      name: "getBlockName",
      description: "Returns the name of a block given its client ID",
    },
    {
      name: "getBlockOrder",
      description: "Returns the order of blocks in the editor",
    },
    {
      name: "getBlockRootClientId",
      description: "Returns the root client ID of a block",
    },
    { name: "getBlocks", description: "Returns all blocks in the editor" },
    {
      name: "getBlocksByClientId",
      description: "Returns blocks by their client IDs",
    },
    {
      name: "getBlockSelectionEnd",
      description: "Returns the ending point of block selection",
    },
    {
      name: "getBlockSelectionStart",
      description: "Returns the starting point of block selection",
    },
    {
      name: "getClientIdsOfDescendants",
      description: "Returns the client IDs of all descendants of a block",
    },
    {
      name: "getClientIdsWithDescendants",
      description: "Returns the client IDs of blocks and their descendants",
    },
    { name: "getCurrentPost", description: "Returns the current post" },
    {
      name: "getCurrentPostAttribute",
      description: "Returns a post attribute",
    },
    { name: "getCurrentPostId", description: "Returns the current post ID" },
    {
      name: "getCurrentPostLastRevisionId",
      description: "Returns the last revision ID of the current post",
    },
    {
      name: "getCurrentPostRevisionsCount",
      description: "Returns the number of revisions for the current post",
    },
    {
      name: "getCurrentPostType",
      description: "Returns the current post type",
    },
    {
      name: "getCurrentTemplateId",
      description: "Returns the current template ID",
    },
    { name: "getDeviceType", description: "Returns the current device type" },
    {
      name: "getEditedPostAttribute",
      description: "Returns an edited post attribute",
    },
    {
      name: "getEditedPostContent",
      description: "Returns the edited post content",
    },
    {
      name: "getEditedPostPreviewLink",
      description: "Returns the preview link for the edited post",
    },
    {
      name: "getEditedPostSlug",
      description: "Returns the slug of the edited post",
    },
    {
      name: "getEditedPostVisibility",
      description: "Returns the visibility of the edited post",
    },
    {
      name: "getEditorBlocks",
      description: "Returns all blocks in the editor",
    },
    { name: "getEditorMode", description: "Returns the current editor mode" },
    {
      name: "getEditorSelection",
      description: "Returns the current editor selection",
    },
    {
      name: "getEditorSelectionEnd",
      description: "Returns the ending point of editor selection",
    },
    {
      name: "getEditorSelectionStart",
      description: "Returns the starting point of editor selection",
    },
    { name: "getEditorSettings", description: "Returns the editor settings" },
    {
      name: "getFirstMultiSelectedBlockClientId",
      description: "Returns the client ID of the first selected block",
    },
    {
      name: "getGlobalBlockCount",
      description: "Returns the total number of blocks globally",
    },
    { name: "getInserterItems", description: "Returns the inserter items" },
    {
      name: "getLastMultiSelectedBlockClientId",
      description: "Returns the client ID of the last selected block",
    },
    {
      name: "getMultiSelectedBlockClientIds",
      description: "Returns the client IDs of multiple selected blocks",
    },
    {
      name: "getMultiSelectedBlocks",
      description: "Returns multiple selected blocks",
    },
    {
      name: "getMultiSelectedBlocksEndClientId",
      description: "Returns the client ID of the last block in multi-selection",
    },
    {
      name: "getMultiSelectedBlocksStartClientId",
      description:
        "Returns the client ID of the first block in multi-selection",
    },
    {
      name: "getNextBlockClientId",
      description: "Returns the client ID of the next block",
    },
    {
      name: "getPermalink",
      description: "Returns the permalink for the current post",
    },
    {
      name: "getPermalinkParts",
      description: "Returns the parts of the permalink",
    },
    { name: "getPostEdits", description: "Returns the edits made to the post" },
    {
      name: "getPostLockUser",
      description: "Returns the user who has locked the post",
    },
    {
      name: "getPostTypeLabel",
      description: "Returns the label for the current post type",
    },
    {
      name: "getPreviousBlockClientId",
      description: "Returns the client ID of the previous block",
    },
    {
      name: "getRenderingMode",
      description: "Returns the current rendering mode",
    },
    {
      name: "getSelectedBlock",
      description: "Returns the currently selected block",
    },
    {
      name: "getSelectedBlockClientId",
      description: "Returns the client ID of the selected block",
    },
    {
      name: "getSelectedBlockCount",
      description: "Returns the number of selected blocks",
    },
    {
      name: "getSelectedBlocksInitialCaretPosition",
      description: "Returns the initial caret position for selected blocks",
    },
    {
      name: "getStateBeforeOptimisticTransaction",
      description: "Returns the state before an optimistic transaction",
    },
    {
      name: "getSuggestedPostFormat",
      description: "Returns the suggested post format",
    },
    { name: "getTemplate", description: "Returns the current template" },
    { name: "getTemplateLock", description: "Returns the template lock" },
    {
      name: "hasChangedContent",
      description: "Returns whether the content has changed",
    },
    {
      name: "hasEditorRedo",
      description: "Returns whether there are redo operations available",
    },
    {
      name: "hasEditorUndo",
      description: "Returns whether there are undo operations available",
    },
    {
      name: "hasInserterItems",
      description: "Returns whether there are inserter items available",
    },
    {
      name: "hasMultiSelection",
      description: "Returns whether there is a multi-selection",
    },
    {
      name: "hasNonPostEntityChanges",
      description: "Returns whether there are non-post entity changes",
    },
    {
      name: "hasSelectedBlock",
      description: "Returns whether a block is selected",
    },
    {
      name: "hasSelectedInnerBlock",
      description: "Returns whether an inner block is selected",
    },
    {
      name: "inSomeHistory",
      description: "Returns whether the current state is in some history",
    },
    {
      name: "isAncestorMultiSelected",
      description: "Returns whether an ancestor block is multi-selected",
    },
    {
      name: "isAutosavingPost",
      description: "Returns whether the post is being autosaved",
    },
    {
      name: "isBlockInsertionPointVisible",
      description: "Returns whether the block insertion point is visible",
    },
    {
      name: "isBlockMultiSelected",
      description: "Returns whether a block is part of a multi-selection",
    },
    {
      name: "isBlockSelected",
      description: "Returns whether a block is selected",
    },
    { name: "isBlockValid", description: "Returns whether a block is valid" },
    {
      name: "isBlockWithinSelection",
      description: "Returns whether a block is within the current selection",
    },
    {
      name: "isCaretWithinFormattedText",
      description: "Returns whether the caret is within formatted text",
    },
    {
      name: "isCleanNewPost",
      description: "Returns whether the post is a clean new post",
    },
    {
      name: "isCurrentPostPending",
      description: "Returns whether the current post is pending",
    },
    {
      name: "isCurrentPostPublished",
      description: "Returns whether the current post is published",
    },
    {
      name: "isCurrentPostScheduled",
      description: "Returns whether the current post is scheduled",
    },
    {
      name: "isDeletingPost",
      description: "Returns whether the post is being deleted",
    },
    {
      name: "isEditedPostAutosaveable",
      description: "Returns whether the edited post can be autosaved",
    },
    {
      name: "isEditedPostBeingScheduled",
      description: "Returns whether the edited post is being scheduled",
    },
    {
      name: "isEditedPostDateFloating",
      description: "Returns whether the edited post date is floating",
    },
    {
      name: "isEditedPostDirty",
      description: "Returns whether the edited post has unsaved changes",
    },
    {
      name: "isEditedPostEmpty",
      description: "Returns whether the edited post is empty",
    },
    {
      name: "isEditedPostNew",
      description: "Returns whether the edited post is new",
    },
    {
      name: "isEditedPostPublishable",
      description: "Returns whether the edited post can be published",
    },
    {
      name: "isEditedPostSaveable",
      description: "Returns whether the edited post can be saved",
    },
    {
      name: "isEditorPanelEnabled",
      description: "Returns whether an editor panel is enabled",
    },
    {
      name: "isEditorPanelOpened",
      description: "Returns whether an editor panel is opened",
    },
    {
      name: "isEditorPanelRemoved",
      description: "Returns whether an editor panel is removed",
    },
    {
      name: "isFirstMultiSelectedBlock",
      description: "Returns whether a block is the first in multi-selection",
    },
    {
      name: "isInserterOpened",
      description: "Returns whether the inserter is opened",
    },
    {
      name: "isListViewOpened",
      description: "Returns whether the list view is opened",
    },
    {
      name: "isMultiSelecting",
      description: "Returns whether multi-selection is in progress",
    },
    {
      name: "isPermalinkEditable",
      description: "Returns whether the permalink is editable",
    },
    {
      name: "isPostAutosavingLocked",
      description: "Returns whether post autosaving is locked",
    },
    { name: "isPostLocked", description: "Returns whether the post is locked" },
    {
      name: "isPostLockTakeover",
      description: "Returns whether there is a post lock takeover",
    },
    {
      name: "isPostSavingLocked",
      description: "Returns whether post saving is locked",
    },
    {
      name: "isPreviewingPost",
      description: "Returns whether the post is being previewed",
    },
    {
      name: "isPublishingPost",
      description: "Returns whether the post is being published",
    },
    {
      name: "isPublishSidebarEnabled",
      description: "Returns whether the publish sidebar is enabled",
    },
    {
      name: "isPublishSidebarOpened",
      description: "Returns whether the publish sidebar is opened",
    },
    {
      name: "isSavingNonPostEntityChanges",
      description: "Returns whether non-post entity changes are being saved",
    },
    {
      name: "isSavingPost",
      description: "Returns whether the post is being saved",
    },
    {
      name: "isSelectionEnabled",
      description: "Returns whether selection is enabled",
    },
    { name: "isTyping", description: "Returns whether the user is typing" },
    {
      name: "isValidTemplate",
      description: "Returns whether the template is valid",
    },
  ],
  "core/keyboard-shortcuts": [
    {
      name: "getAllShortcutKeyCombinations",
      description:
        "Returns the shortcuts that include aliases for a given shortcut name",
    },
    {
      name: "getAllShortcutRawKeyCombinations",
      description:
        "Returns the raw representation of all the keyboard combinations of a given shortcut name",
    },
    {
      name: "getCategoryShortcuts",
      description: "Returns the shortcut names list for a given category name",
    },
    {
      name: "getShortcutAliases",
      description: "Returns the aliases for a given shortcut name",
    },
    {
      name: "getShortcutDescription",
      description: "Returns the shortcut description given its name",
    },
    {
      name: "getShortcutKeyCombination",
      description: "Returns the main key combination for a given shortcut name",
    },
    {
      name: "getShortcutRepresentation",
      description:
        "Returns a string representing the main key combination for a given shortcut name",
    },
  ],
  "core/notices": [
    {
      name: "getNotices",
      description:
        "Returns all notices as an array, optionally for a given context. Defaults to the global context.",
    },
  ],
  "core/nux": [
    {
      name: "areTipsEnabled",
      description: "Returns whether or not tips are globally enabled",
    },
    {
      name: "getAssociatedGuide",
      description:
        "Returns an object describing the guide, if any, that the given tip is a part of",
    },
    {
      name: "isTipVisible",
      description:
        "Determines whether or not the given tip is showing. Tips are hidden if they are disabled, have been dismissed, or are not the current tip in any guide that they have been added to",
    },
  ],
};
