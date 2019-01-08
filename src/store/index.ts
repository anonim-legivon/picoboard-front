import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducers } from "./reducers";
import { mainWatcher } from "./sagas/watchers";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(mainWatcher);

  return store;
};
