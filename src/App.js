import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// pages for this product
import HomePage from "Pages/HomePage.js";
import AllPosts from "./Pages/AllPosts";
import OnePost from "./Templates/OnePost";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route component={HomePage} exact path="/" />
                    <Route component={AllPosts} exact path="/blog" />
                    <Route component={OnePost} exact path="/:slug" />
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;