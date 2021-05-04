import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import HomePage from "Pages/HomePage.js";
import Resume from "Pages/Resume.js";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
