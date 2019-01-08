import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  categoriesFetchFailureAction,
  categoriesFetchSuccessAction
} from "../../actions/caregories-fetch";

export function* categoriesFetchWorker() {
  try {
    const response = yield call(axios.get, "http://85.15.96.9:8000/categories");

    yield put(categoriesFetchSuccessAction(response.data));
  } catch (error) {
    yield put(categoriesFetchFailureAction(error));
  }
}
