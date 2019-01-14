import { ISingleThreadData } from "../intefaces";
import { actionTypes } from "./actionTypes";

export interface IBoardFetchRequestAction {
  board: string;
  type: actionTypes.SINGLE_THREAD_FETCH_REQUEST;
  thread: string;
}
export const boardFetchRequestAction = (thread: string, board: string): IBoardFetchRequestAction => ({
  board,
  thread,
  type: actionTypes.SINGLE_THREAD_FETCH_REQUEST
});
interface IBoardFetchSuccessAction {
  type: actionTypes.SINGLE_THREAD_FETCH_SUCCESS;
  payload: ISingleThreadData;
}
export const boardFetchSuccessAction = (payload: ISingleThreadData): IBoardFetchSuccessAction => ({
  payload,
  type: actionTypes.SINGLE_THREAD_FETCH_SUCCESS
});
interface IBoardFetchFailureAction {
  type: actionTypes.SINGLE_THREAD_FETCH_FAILURE;
  err: Error;
}
export const boardFetchFailureAction = (err: Error): IBoardFetchFailureAction => ({
  err,
  type: actionTypes.SINGLE_THREAD_FETCH_FAILURE
});
export type singleThreadFetchActionsTypes =
  | IBoardFetchRequestAction
  | IBoardFetchFailureAction
  | IBoardFetchSuccessAction;
