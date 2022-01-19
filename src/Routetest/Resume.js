import React from "react";
import Backg from "../Vedio/Black3.mp4";
import ReactLoading from 'react-loading';
import Resumepic from "../Image/Resumepic.jpg";
function Resume() {
    return (
        <div className="fromlayoutResume">
            <video autoPlay loop muted id="video">
                <source src={Backg} type="video/mp4" />
            </video>
            <h1>Resume</h1>
            <img src={Resumepic}  alt="logo"  style={{width:"500px", height:"500px"}}/>
            {/* <ReactLoading type={"balls"} color={"#ffffff"} height={'20%'} width={'20%'} /> */}
        </div>
    );
}

export default Resume;
