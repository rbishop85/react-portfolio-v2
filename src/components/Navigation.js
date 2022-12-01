import * as React from 'react';
import { Link } from "react-router-dom";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

// In-line styling
const styles = {
  navigation: {
    marginTop: 0
  }
};

// Custom styling for MUI tabs
const StyledTab = styled(Tab)({
  "&.MuiTouchRipple-root": {
    color: "#D3D3D3"
  },
  "&.MuiButtonBase-root.MuiTab-root": {
    fontSize: "15px",
    fontWeight: 700,
    paddingLeft: 0,
    paddingRight: 0
  },
  "&.Mui-selected": {
    color: "#D3D3D3",
    fontSize: "15px"
  },
})

function Navigation({ currentTab, setCurrentTab }) {

  // What to do when tab is changed
  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const routes = ["/", "/portfolio", "/contact", "resume"]

  return (
    <Box sx={{ width: '100%', }} style={styles.navigation}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        centered
        textColor="inherit"
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: "#D3D3D3" }
        }}
        aria-label="navigation tabs"
      >
        {/* Individual tabs for pages */}
        <StyledTab 
          value="about" 
          label="About"
          component={Link}
          to={routes[0]}
        />
        <StyledTab 
          value="portfolio" 
          label="Portfolio"
          component={Link}
          to={routes[1]}
        />
        <StyledTab 
          value="contact" 
          label="Contact"
          component={Link}
          to={routes[2]}
        />
        <StyledTab 
          value="resume" 
          label="Resume"
          component={Link}
          to={routes[3]}
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
