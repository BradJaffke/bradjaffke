import React from "react";
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import HomePage from "Pages/HomePage.js";
import Resume from "Pages/Resume.js";

let hist = createBrowserHistory();

function App() {
    return(
        <Router>
            <div className="App">
                <Route path="/" component={HomePage} />
                <Route path="/Resume" component={Resume} />
            </div>
        </Router>
    );
}

export default App;