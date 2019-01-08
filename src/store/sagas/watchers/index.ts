import { takeLatest } from "redux-saga/effects";

import { actionTypes } from "../../actions/actionTypes";
import { categoriesFetchWorker } from "../workers/categoriesFetchWorker";
import { threadsFetchWorker } from "../workers/threadsFetchWorker";

export function* mainWatcher() {
  yield takeLatest(actionTypes.CATEGORIES_FETCH_REQUEST, categoriesFetchWorker);
  yield takeLatest(actionTypes.THREADS_FETCH_REQUEST, threadsFetchWorker);
}
