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
    return (
        <div className="app">
            <Router>
                <Container  maxWidth="lg">
                    <Header />
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                    <Footer />
                </Container>
            </Router>
        </div>
    );
}

export default App;
