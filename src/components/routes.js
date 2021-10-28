import React from "react";

import { isAuthenticated } from "../pages/auth";

import login from "../pages/Login";
import home from "../pages/Home";
import notFound from "../pages/notFound";
import Public from "../pages/Public";

import {history} from '../history'

import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";

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
      <PrivateRoute component={home} exact path="/"  />
      <Route component={login} exact path="/login"  />
      <Route component={Public} exact path="/public"  />
      <Route component={notFound} />
      <PrivateRoute path="/app" component={() => <h1>voce esta logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
