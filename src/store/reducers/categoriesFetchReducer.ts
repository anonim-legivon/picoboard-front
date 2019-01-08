import { actionTypes } from "../actions/actionTypes";
import { categoriesFetchActionsTypes } from "../actions/caregories-fetch";
import { ICategories } from "../intefaces";

const initialState = {
  data: [],
  loading: false
};

export const categoriesFetchReducer = (
  state: ICategories = initialState,
  action: categoriesFetchActionsTypes
): ICategories => {
  switch (action.type) {
    case actionTypes.CATEGORIES_FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.CATEGORIES_FETCH_SUCCESS: {
      return {
        data: action.categories,
        loading: false
      };
    }
    case actionTypes.CATEGORIES_FETCH_FAILURE: {
      return {
        ...state,
        err: action.err,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};
