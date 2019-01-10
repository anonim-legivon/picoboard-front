import { combineReducers } from "redux";

import { IStore } from "../intefaces";
import { categoriesFetchReducer } from "./categoriesFetchReducer";
import { singleThreadFetchReducer } from "./singleThreadFetchReducer";
import { threadsFetchReducer } from "./threadsFetchReducer";

export const reducers = combineReducers<IStore>({
  categories: categoriesFetchReducer,
  singleThread: singleThreadFetchReducer,
  threads: threadsFetchReducer
});
