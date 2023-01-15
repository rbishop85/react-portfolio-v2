import * as React from 'react';
import { Link } from "react-router-dom";

import { Tabs, Tab, Box } from '@mui/material';

function Navigation({ currentTab, setCurrentTab }) {

  // What to do when tab is changed
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const routes = ["/", "/projects", "/resume"]

  return (
    <Box className="navigation">
      <Tabs
        value={currentTab}
        onChange={handleChange}
        centered
        textColor="inherit"
        aria-label="navigation tabs"
      >
        {/* Individual tabs for pages */}
        <Tab 
          value="about" 
          label="About"
          component={Link}
          to={routes[0]}
        />
        <Tab 
          value="projects" 
          label="Projects"
          component={Link}
          to={routes[1]}
        />
        <Tab 
          value="resume" 
          label="Resume"
          component={Link}
          to={routes[2]}
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
