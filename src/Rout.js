import About from "./About";
import User from "./User";
import React from "react";
import "./App.css";
// import Hook from './Hook'
import Array from "./Array";
import Classcompo from "./ClassCompo";
import Banner from "./Componen/Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Rout() {
    return (
        <div>
            <Banner />
            <Switch>
                <Route path="/" exact>
                    <About />
                </Route>
                <Route path="/User">
                    <User />
                </Route>
            </Switch>
        </div>
    );
}

export default Rout;
