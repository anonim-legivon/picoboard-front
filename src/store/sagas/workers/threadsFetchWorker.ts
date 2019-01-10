import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  IThreadsFethcRequestAction,
  threadsFetchFailureAction,
  threadsFetchSuccessAction
} from "../../actions/threads-fetch";

export function* threadsFetchWorker(action: IThreadsFethcRequestAction) {
  try {
    const response = yield call(axios.get, `/boards/${action.board}/threads`);

    yield put(threadsFetchSuccessAction(response.data.results));
  } catch (error) {
    yield put(threadsFetchFailureAction(error));
  }
}
