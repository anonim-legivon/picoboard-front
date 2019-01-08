import { ICategory } from "../intefaces";
import { actionTypes } from "./actionTypes";

interface ICategoriesFetchRequestAction {
  type: actionTypes.CATEGORIES_FETCH_REQUEST;
}

export const categoriesFetchRequestAction = (): ICategoriesFetchRequestAction => ({
  type: actionTypes.CATEGORIES_FETCH_REQUEST
});

interface ICategoriesFetchtSuccessAction {
  type: actionTypes.CATEGORIES_FETCH_SUCCESS;
  categories: ICategory[];
}

export const categoriesFetchSuccessAction = (
  categories: ICategory[]
): ICategoriesFetchtSuccessAction => ({
  categories,
  type: actionTypes.CATEGORIES_FETCH_SUCCESS
});
interface ICategoriesFetchtFailureAction {
  type: actionTypes.CATEGORIES_FETCH_FAILURE;
  err: Error;
}
export const categoriesFetchFailureAction = (
  err: Error
): ICategoriesFetchtFailureAction => ({
  err,
  type: actionTypes.CATEGORIES_FETCH_FAILURE
});

export type categoriesFetchActionsTypes =
  | ICategoriesFetchRequestAction
  | ICategoriesFetchtFailureAction
  | ICategoriesFetchtSuccessAction;
