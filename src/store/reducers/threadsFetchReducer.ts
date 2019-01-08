import { actionTypes } from "../actions/actionTypes";
import { threadsFetchActionsTypes } from "../actions/threads-fetch";
import { ICatalog } from "../intefaces";

const initialState = {
  data: {
    op_post: null,
    last_posts: []
  },
  loading: true
};

export const threadsFetchReducer = (
  state: ICatalog = initialState,
  action: threadsFetchActionsTypes
): ICatalog => {
  switch (action.type) {
    case actionTypes.THREADS_FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.THREADS_FETCH_SUCCESS: {
      return {
        data: action.payload.data,
        loading: false
      };
    }
    case actionTypes.THREADS_FETCH_FAILURE: {
      return {
        ...state,
        err: action.err
      };
    }
    default:
      return state;
  }
};
