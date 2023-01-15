import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material";
import { createContext, useState } from "react";

// Importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Importing Pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// Loading in custom style sheet
import "./assets/styles/styles.css";

export const ThemeContext = createContext(null)

// Main layer of app, everything else cascades down from here
function App() {

    // State info for tracking color theme
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    // State info for tracking current tab
    const [currentTab, setCurrentTab] = useState('about');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="app" id={theme}>
                <Router>
                    <Container disableGutters maxWidth="lg">
                        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} toggleTheme={toggleTheme} theme={theme} />
                        <Routes className="content">
                            <Route exact path="/" element={<About setCurrentTab={setCurrentTab} />} />
                            <Route path="/projects" element={<Projects setCurrentTab={setCurrentTab} />} />
                            <Route path="/resume" element={<Resume setCurrentTab={setCurrentTab} />} />
                        </Routes>
                        <Footer />
                    </Container>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
