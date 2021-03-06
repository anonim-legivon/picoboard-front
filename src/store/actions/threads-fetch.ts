import { ICatalogPost } from "../intefaces";
import { actionTypes } from "./actionTypes";

export interface IThreadsFethcRequestAction {
  type: actionTypes.THREADS_FETCH_REQUEST;
  board: string;
}

export const threadsFetchRequestAction = (board: string): IThreadsFethcRequestAction => ({
  board,
  type: actionTypes.THREADS_FETCH_REQUEST
});

interface IThreadsFethcSuccessAction {
  type: actionTypes.THREADS_FETCH_SUCCESS;
  payload: ICatalogPost[];
}

export const threadsFetchSuccessAction = (payload: ICatalogPost[]): IThreadsFethcSuccessAction => ({
  payload,
  type: actionTypes.THREADS_FETCH_SUCCESS
});

interface IThreadsFethcFailureAction {
  err: Error;
  type: actionTypes.THREADS_FETCH_FAILURE;
}

export const threadsFetchFailureAction = (err: Error): IThreadsFethcFailureAction => ({
  err,
  type: actionTypes.THREADS_FETCH_FAILURE
});
export type threadsFetchActionsTypes =
  | IThreadsFethcFailureAction
  | IThreadsFethcRequestAction
  | IThreadsFethcSuccessAction;
