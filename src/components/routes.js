import React from "react";

import { isAuthenticated } from "../pages/auth";

import Login from "../pages/Login";
import Home from "../pages/Home";
import notFound from "../pages/notFound";
import Public from "../pages/Public";

import {history} from '../history'

import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";


//Rota privada
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

//Rota Publica
const PublicRoute = props => isAuthenticated()
?<Redirect to ="/"/>
:<Route { ... props}/>

//rotas
const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PublicRoute exact path="/login" component={Login} />
      <PrivateRoute  exact path="/" component={Home} />
      <Route  exact path="/public" component={Public} />
      <Route component={notFound} />
      <PrivateRoute path="/app" component={() => <h1>voce esta logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
