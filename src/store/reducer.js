//  Export initial state
export const initialState = {
  customer: {
    email: undefined,
    sessionKey: undefined,
    acceptsCookies: undefined,
  },
  email: {},
  website: {
    config: {
      phoneNumber: '01234 567 891',
      emailAddress: 'email@me.com',
      promoMessage: '',
    },
  },
};

//  REDUCERS
export const reducer = (state = initialState, action) => {
  //  Create a copy of the current state which is safe to mutate
  const newState = { ...state };
  //  Switch statement to find the reducer for the action taken
  switch (action.type) {
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        customer: { ...action.customer },
      };

    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: {
          ...action.email,
        },
      };

    case 'UPDATE_EMAIL_LAYOUT':
      return {
        ...state,
        email: {
          ...state.email,
          layout: { ...action.layout },
        },
      };

    case 'UPDATE_EMAIL_CONTENT_BY_ID':
      return {
        ...state,
        email: {
          ...state.email,
          layout: {
            ...state.email.layout,
            [action.rowId]: {
              ...state.email.layout[action.rowId],
              columns: {
                ...state.email.layout[action.rowId].columns,
                [action.columnId]: {
                  ...state.email.layout[action.rowId].columns[action.columnId],
                  content: {
                    ...state.email.layout[action.rowId].columns[action.columnId]
                      .content,
                    [action.contentId]: {
                      ...action.data,
                    },
                  },
                },
              },
            },
          },
        },
      };

    case 'DELETE_EMAIL_CONTENT_BY_ID':
      delete newState.email.layout[action.rowId].columns[action.columnId]
        .content[action.contentId];
      return {
        ...newState,
        email: {
          ...newState.email,
          layout: {
            ...newState.email.layout,
            [action.rowId]: {
              ...newState.email.layout[action.rowId],
              columns: {
                ...newState.email.layout[action.rowId].columns,
                [action.columnId]: {
                  ...newState.email.layout[action.rowId].columns[
                    action.columnId
                  ],
                  content: {
                    ...newState.email.layout[action.rowId].columns[
                      action.columnId
                    ].content,
                  },
                },
              },
            },
          },
        },
      };

    case 'UPDATE_EMAIL_ACTIVE_ROW_ID':
      return {
        ...state,
        email: {
          ...state.email,
          activeRowId: action.activeRowId,
        },
      };

    case 'UPDATE_EMAIL_ACTIVE_COLUMN_ID':
      return {
        ...state,
        email: {
          ...state.email,
          activeColumnId: action.activeColumnId,
        },
      };

    case 'UPDATE_EMAIL_ACTIVE_CONTENT_ID':
      return {
        ...state,
        email: {
          ...state.email,
          activeContentId: action.activeContentId,
        },
      };

    case 'UPDATE_SAVED_FLAG':
      return {
        ...state,
        email: {
          ...state.email,
          savedFlag: action.savedFlag,
        },
      };

    case 'UPDATE_TEMPLATE_KEYWORDS':
      return {
        ...state,
        email: {
          ...state.email,
          templateKeywords: [...action.templateKeywords],
        },
      };

    case 'UPDATE_TEMPLATE_KEYWORD_BY_INDEX':
      newState.email.templateKeywords[action.index] = action.value;
      return {
        ...newState,
        email: {
          ...newState.email,
          templateKeywords: [...newState.email.templateKeywords],
        },
      };

    default:
      return state;
  }
};
