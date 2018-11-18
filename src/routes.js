import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import HomePage from "./Home";
import DashboardPage from "./Dashboard";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
