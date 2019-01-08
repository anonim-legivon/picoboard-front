import { takeLatest } from "redux-saga/effects";

import { actionTypes } from "../../actions/actionTypes";
import { categoriesFetchWorker } from "../workers/categoriesFetchWorker";

export function* mainWatcher() {
  yield takeLatest(actionTypes.CATEGORIES_FETCH_REQUEST, categoriesFetchWorker);
}
