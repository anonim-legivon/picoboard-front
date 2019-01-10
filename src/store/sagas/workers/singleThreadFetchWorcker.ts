import axios from "axios";

import { call, put } from "redux-saga/effects";
import {
  ISingleThreadFetchRequestAction,
  singleThreadFetchFailureAction,
  singleThreadFetchSuccessAction
} from "src/store/actions/single-thread-fetch";

export function* singleThreadFetchWorker(action: ISingleThreadFetchRequestAction) {
  try {
    const response = yield call(axios.get, `/boards/${action.board}/threads/${action.thread}`);

    yield put(singleThreadFetchSuccessAction(response.data));
  } catch (error) {
    yield put(singleThreadFetchFailureAction(error));
  }
}
