import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material";

// Importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Importing Pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// Loading in custom style sheet
import "./assets/styles/styles.css";

// Main layer of app, everything else cascades down from here
function App() {

    // State info for tracking current tab
    const [currentTab, setCurrentTab] = React.useState('about');

    return (
        <div className="app">
            <Router>
                <Container  maxWidth="lg">
                    <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
                    <Routes>
                        <Route path="/" element={<About setCurrentTab={setCurrentTab} />} />
                        <Route path="/portfolio" element={<Portfolio setCurrentTab={setCurrentTab} />} />
                        <Route path="/contact" element={<Contact setCurrentTab={setCurrentTab} />} />
                        <Route path="/resume" element={<Resume setCurrentTab={setCurrentTab} />} />
                    </Routes>
                    <Footer />
                </Container>
            </Router>
        </div>
    );
}

export default App;
