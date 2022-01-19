import React, { Component, useEffect } from "react";
import Grid from "@mui/material/Grid";

class Main extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={8}></Grid>
                    <h1>Main function {}</h1>
                </Grid>
            </div>
        );
    }
}
export default Main;
