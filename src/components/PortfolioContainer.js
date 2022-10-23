import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Header from './Header';
import { Container } from "@mui/material";

export default function PortfolioContainer() {
  // Sets the state for currentPage, defaulting to the About page
  const [currentPage, setCurrentPage] = useState('About');

  // Determines which page to load based on what currentPage is set to
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Main app layout, header, rendered content, and footer
  return (
    <Container  maxWidth="lg">
      {/* Passes the page change function to the header where the tabs are located */}
      <Header handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </Container>
  );
}
