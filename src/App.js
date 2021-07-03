import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// pages for this product
import HomePage from "Pages/HomePage.js";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route component={HomePage} exact path="/" />
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;