import React from "react";
import { isAuthenticated } from "./pages/auth";
import login from "./pages/login";
import home from "./pages/home";
import notFound from "./pages/notFound";
import Public from "./pages/Public";

import {history} from './history'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/public" component={Public} />
      <Route component={notFound} />
      <PrivateRoute path="/app" component={() => <h1>voce esta logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
