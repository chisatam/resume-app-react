// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import Hook from './Hook'
import Array from "./Array";
import Classcompo from "./ClassCompo";
import Banner from "./Componen/Banner";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Rout from "./Rout";
import Resume from "./Routetest/Resume";
import About from "./Routetest/About";
import Contactus from "./Routetest/About";
import Urlnotfound from "./Routetest/urlnotfound";
import Main from "./Componen/Main";
import Appbar from "./Routetest/Appbar"
import Logo from "./logo1.png"

function App() {
    return (
        <BrowserRouter>
            <div>
            <Appbar logo = {Logo} test ="Suc"/>
                {/* <ul>
                 
                    <li>
                        <Link to="/">หน้าแรก</Link>
                    </li>
                    <li>
                        <Link to="/Banner">เว็บบอร์ด</Link>
                    </li>

                    <li>
                        <Link to="/Contactus">ติดต่อเรา</Link>
                    </li>
                </ul> */}
                <div>
                    <Switch>
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/" component={Banner} />
                        <Route exact path="/Resume" component={Resume} />
                        <Route exact path="/About" component={About} />
                        <Route component={Urlnotfound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
