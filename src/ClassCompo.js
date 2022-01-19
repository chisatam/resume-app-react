import React,{Component} from "react";
import './App.css'

import Button from "@mui/material/Button";

class Classcompo extends Component {
    render(){
        return(
            <div className="App-header">
                <h1>nattakan jaiparommueang</h1>
                {/* <img src={lila} className="App-logo" alt="logo"/> */}
                <Button variant="contained" >
                Disable elevation
                </Button>
            </div>

        );
    }
}
export default Classcompo;