import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
  );
};
