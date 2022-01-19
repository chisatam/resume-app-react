// import React from 'react'

// function About() {
//     return (
//         <div>
//               <h1>หน้า contactus</h1>
//         </div>
//     )
// }

// export default About

import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import Backg from "../Vedio/Black3.mp4";
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {Time: true};
       
       
      }
    render() {
        return (
            <div className="fromlayoutResume">
                 {/* <video autoPlay loop muted id="video">
                <source src={Backg} type="video/mp4" />
            </video> */}
                 <ReactLoading type={"balls"} color={"#ffffff"} height={'20%'} width={'20%'} />
                <h1>หน้านี้พี่กำลังทำอยู่น้องไลลา</h1>
            </div>
        )
    }
}

