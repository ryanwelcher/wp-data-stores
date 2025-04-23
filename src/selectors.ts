// Store selectors mapping
export const storeSelectors: Record<
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
