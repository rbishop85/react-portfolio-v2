import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { styled } from "@mui/material/styles";

const styles = {
  navigation: {
    background: '#e8eaf6',
    marginTop: 0
  }
};

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "#007B6D"
  },
  "&.MuiTouchRipple-root": {
    color: "#007B6D"
  },
})

function Navigation({ currentPage, handlePageChange }) {
  const [value, setValue] = React.useState('about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }} style={styles.navigation}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: "#007B6D"  }
        }}
        aria-label="navigation tabs"
      >
        <StyledTab 
          value="about" 
          label="About Me"
          href="#about"
          onClick={() => handlePageChange('About')}
        />
        <StyledTab 
          value="portfolio" 
          label="Portfolio"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        />
        <StyledTab 
          value="contact" 
          label="Contact Me"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        />
        <StyledTab 
          value="resume" 
          label="Resume"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
