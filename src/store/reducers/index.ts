import { combineReducers } from "redux";

import { IStore } from "../intefaces";
import { categoriesFetchReducer } from "./categoriesFetchReducer";

export const reducers = combineReducers<IStore>({
  categories: categoriesFetchReducer
});
