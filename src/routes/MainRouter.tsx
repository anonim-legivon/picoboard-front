import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import { configureStore } from "../store";

export const MainRouter = () => (
  <ReduxProvider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CategoriesPage} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>
);
