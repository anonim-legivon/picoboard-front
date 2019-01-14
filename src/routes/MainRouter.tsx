import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ThreadPage from "src/pages/ThreadPage/ThreadPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import { configureStore } from "../store";

export class MainRouter extends React.Component {
  public render() {
    return (
      <ReduxProvider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={CategoriesPage} />
            <Route path="/:board" exact={true} component={BoardPage} />
            <Route path="/:board/:thread" component={ThreadPage} />
          </Switch>
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}
