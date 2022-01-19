import React, { Component } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import "../CSS/ButtonPrimary.css";
import { Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import Backg from "../Vedio/Black3.mp4";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import image1 from "../Image/firstLogo.jpg";
import image2 from "../Image/University.jpg";
import image3 from "../Image/soot.jpg";
import image4 from "../Image/sootpng.png";
import TypeWriterEffect from "react-typewriter-effect";

function Banner() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="fromlayout">
            <video autoPlay loop muted id="video">
                <source src={Backg} type="video/mp4" />
            </video>

            {/* <Grid container spacing={2}  >
                <Grid item xs={4} >
                <img src={image1} className="App-logo" alt="logo" style={{marginLeft:"50%"}} />
                </Grid>
                <Grid item xs={4}>
                <img src={image2} className="App-logo" alt="logo" style={{marginLeft:"35%"}} />
                </Grid>
                <Grid item xs={4}>
                <img src={image3} className="App-logo" alt="logo" style={{marginLeft:"15%"}} />
                </Grid>
                
            </Grid> */}
            <img src={image4} className="App-logo" alt="logo" />
            {/* <h1>Chisanupong Tamprasit</h1> */}

            <TypeWriterEffect
                textStyle={{
                    fontFamily: "Red Hat Display",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "1.5em",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                    "Hey guy, I'm Chisanupong Tamprasit.",
                    "My nickname First.",
                    "This my resume.",
                    "If you want to know me more.",
                    "Click to see.",
                ]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={30}
            />

            {/* <Link to="/Main">
                <Button
                    variant="outlined"
                    disableElevation
                    style={{ marginTop: "50px", color: "white" }}
                >
                    Resume
                </Button>
            </Link> */}
        </div>
    );
}

export default Banner;
