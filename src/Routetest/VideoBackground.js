import React, { VFC } from "react";
import "../CSS/VideoBackground.css";
import Imageblack from "../Vedio/Black3.mp4";

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export default function VideoBackground() {
    return (
        <div className="video-background">
            <iframe
                width={VIDEO_WIDTH}
                height={VIDEO_HEIGHT}
                src="https://www.youtube.com/embed/ivIixlkODMo?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=0&enablejsapi=1&&widgetid=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            {/* <Appbar logo = {Logo} test ="Suc"/> */}
            {/* <video autoPlay loop muted id="video">
                <source src={Backg} type="video/mp4" />
            </video> */}
          
        </div>
    );
}
