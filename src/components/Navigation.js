// import React from 'react';

// function Navigation({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange('Resume')}
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default Navigation;

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Navigation({ currentPage, handlePageChange }) {
  const [value, setValue] = React.useState('about');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab 
          value="about" 
          label="About Me"
          href="#about"
          onClick={() => handlePageChange('About')}
        />
        <Tab 
          value="portfolio" 
          label="Portfolio"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        />
        <Tab 
          value="contact" 
          label="Contact Me"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        />
        <Tab 
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
