import { Global } from "@emotion/react";
import { Container } from "@mui/material";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

import "./assets/styles/styles.css"

function App() {
    return (
        <div className="app" id="light">
            <PortfolioContainer />
        </div>
    )
}

export default App;