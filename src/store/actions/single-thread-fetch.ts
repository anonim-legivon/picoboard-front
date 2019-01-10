import { ISingleThreadData } from "../intefaces";
import { actionTypes } from "./actionTypes";

export interface ISingleThreadFetchRequestAction {
  board: string;
  type: actionTypes.SINGLE_THREAD_FETCH_REQUEST;
  thread: string;
}
export const singleThreadFetchRequestAction = (thread: string, board: string): ISingleThreadFetchRequestAction => ({
  board,
  thread,
  type: actionTypes.SINGLE_THREAD_FETCH_REQUEST
});
interface ISingleThreadFetchSuccessAction {
  type: actionTypes.SINGLE_THREAD_FETCH_SUCCESS;
  payload: ISingleThreadData;
}
export const singleThreadFetchSuccessAction = (payload: ISingleThreadData): ISingleThreadFetchSuccessAction => ({
  payload,
  type: actionTypes.SINGLE_THREAD_FETCH_SUCCESS
});
interface ISingleThreadFetchFailureAction {
  type: actionTypes.SINGLE_THREAD_FETCH_FAILURE;
  err: Error;
}
export const singleThreadFetchFailureAction = (err: Error): ISingleThreadFetchFailureAction => ({
  err,
  type: actionTypes.SINGLE_THREAD_FETCH_FAILURE
});
export type singleThreadFetchActionsTypes =
  | ISingleThreadFetchRequestAction
  | ISingleThreadFetchFailureAction
  | ISingleThreadFetchSuccessAction;
