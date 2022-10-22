import React from 'react';
import { Grid } from '@mui/material';
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

// const styles = {
//     footer: {
//       position: "fixed",
//       bottom: 0
//     }
//   };

export default function Footer() {
  return (
    <Grid container spacing={2} justifyContent="center" className="footer">
      <Grid item>
      <a href="mailto:rbishop85@gmail.com">
        <h3><GrMail /></h3>
      </a>
      </Grid>
      <Grid item>
      <a href="https://github.com/rbishop85/" target="_blank">
        <h3><GrGithub /></h3>
      </a>
      </Grid>
      <Grid item>
      <a href="https://www.linkedin.com/in/robert-m-bishop/" target="_blank">
        <h3><GrLinkedin /></h3>
      </a>
      </Grid>
    </Grid>
  );
}

