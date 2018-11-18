import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./Home";

const Routes = () => (
  <Router>
    <Route exact path="/" component={HomePage} />
  </Router>
);

export default Routes;
