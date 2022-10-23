import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

// Loading in custom style sheet
import "./assets/styles/styles.css"

// Main layer of app, everything else cascades down from here
function App() {
    return (
        <div className="app">
            <PortfolioContainer />
        </div>
    )
}

export default App;