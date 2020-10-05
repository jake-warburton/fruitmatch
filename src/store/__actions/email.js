export const UpdateEmail = (newEmail) => {
  return {
    type: 'UPDATE_EMAIL',
    email: newEmail,
  };
};

export const UpdateEmailLayout = (newLayout) => {
  return {
    type: 'UPDATE_EMAIL_LAYOUT',
    layout: newLayout,
  };
};

export const UpdateEmailContentById = ({
  rowId,
  columnId,
  contentId,
  data,
}) => {
  return {
    type: 'UPDATE_EMAIL_CONTENT_BY_ID',
    rowId,
    columnId,
    contentId,
    data,
  };
};

export const DeleteEmailContentById = ({ rowId, columnId, contentId }) => {
  return {
    type: 'DELETE_EMAIL_CONTENT_BY_ID',
    rowId,
    columnId,
    contentId,
  };
};

export const UpdateEmailActiveRowId = (newActiveRowId) => {
  return {
    type: 'UPDATE_EMAIL_ACTIVE_ROW_ID',
    activeRowId: newActiveRowId,
  };
};

export const UpdateEmailActiveColumnId = (newActiveColumnId) => {
  return {
    type: 'UPDATE_EMAIL_ACTIVE_COLUMN_ID',
    activeColumnId: newActiveColumnId,
  };
};

export const UpdateEmailActiveContentId = (newActiveContentId) => {
  return {
    type: 'UPDATE_EMAIL_ACTIVE_CONTENT_ID',
    activeContentId: newActiveContentId,
  };
};

export const UpdateSavedFlag = (newSavedFlag) => {
  return {
    type: 'UPDATE_SAVED_FLAG',
    savedFlag: newSavedFlag,
  };
};

export const UpdateTemplateKeywords = (newTemplateKeywords) => {
  return {
    type: 'UPDATE_TEMPLATE_KEYWORDS',
    templateKeywords: newTemplateKeywords,
  };
};

export const UpdateTemplateKeywordByIndex = (index, value) => {
  return {
    type: 'UPDATE_TEMPLATE_KEYWORD_BY_INDEX',
    index,
    value,
  };
};
