import { actionTypes } from "../actions/actionTypes";
import { singleThreadFetchActionsTypes } from "../actions/single-thread-fetch";
import { ISingleThread } from "../intefaces";

const initialState = {
  data: {
    board: "",
    is_closed: false,
    is_deleted: false,
    is_pinned: false,
    lasthit: "",
    posts: [],
    posts_count: 0
  },
  loading: true
};

export const singleThreadFetchReducer = (
  state: ISingleThread = initialState,
  action: singleThreadFetchActionsTypes
): ISingleThread => {
  switch (action.type) {
    case actionTypes.SINGLE_THREAD_FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.SINGLE_THREAD_FETCH_SUCCESS: {
      return {
        data: action.payload,
        loading: false
      };
    }
    case actionTypes.SINGLE_THREAD_FETCH_FAILURE: {
      return {
        ...state,
        err: action.err
      };
    }
    default:
      return state;
  }
};
