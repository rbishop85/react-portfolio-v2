import React from 'react';
import { Grid } from '@mui/material';
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

export default function Footer() {
  return (
    // Icons and links to various contact methods
    <Grid container maxWidth="lg" spacing={2} justifyContent="center" className="footer">
      <Grid item>
      <a href="mailto:rbishop85@gmail.com">
        <h3><GrMail /></h3>
      </a>
      </Grid>
      <Grid item>
      <a href="https://github.com/rbishop85/" target="_blank" rel="noreferrer">
        <h3><GrGithub /></h3>
      </a>
      </Grid>
      <Grid item>
      <a href="https://www.linkedin.com/in/robert-m-bishop/" target="_blank" rel="noreferrer">
        <h3><GrLinkedin /></h3>
      </a>
      </Grid>
    </Grid>
  );
}

