import { combineReducers } from "redux";

import { IStore } from "../intefaces";
import { categoriesFetchReducer } from "./categoriesFetchReducer";
import { threadsFetchReducer } from "./threadsFetchReducer";

export const reducers = combineReducers<IStore>({
  categories: categoriesFetchReducer,
  threads: threadsFetchReducer
});
