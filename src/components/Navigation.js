import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { styled } from "@mui/material/styles";

const styles = {
  navigation: {
    // background: 'yellow',
    marginTop: 0
  }
};

const StyledTab = styled(Tab)({
  "&.MuiTouchRipple-root": {
    color: "#E0E1DD"
  },
  "&.MuiButtonBase-root.MuiTab-root": {
    fontSize: "15px",
    fontWeight: 700,
    paddingLeft: 0,
    paddingRight: 0
  },
  "&.Mui-selected": {
    color: "#E0E1DD",
    fontSize: "15px"
  },
})

function Navigation({ handlePageChange }) {
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
        textColor="#000000"
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: "#E0E1DD" }
        }}
        aria-label="navigation tabs"
      >
        <StyledTab 
          value="about" 
          label="About"
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
          label="Contact"
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
