import React from 'react';
import { Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';

// Pulling in icons for my list of tools
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiReact, SiMysql, SiMongodb } from 'react-icons/si'

// Store pdf of resume in variable
import pdf from '../assets/pdf/resume2.pdf';

export default function Resume({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("resume")

  return (
    <div className="resume">
    <Container>
    <Grid container direction="column" alignItems="center">
      {/* Icons and descriptions for languages I'm trained in */}
      <h2>My Tools:</h2>
      <Grid container justifyContents="center" xs={11} md={6}>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiHtml5 className="ToolIcon" />
          HTML5
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiCss3 className="ToolIcon" />
          CSS3
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiJavascript className="ToolIcon" />
          Javascript
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiNodedotjs className="ToolIcon" />
          NodeJS
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiExpress className="ToolIcon" />
          Express
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiReact className="ToolIcon" />
          React
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiMysql className="ToolIcon" />
          MySQL
        </Grid>
        <Grid container direction="column" alignItems="center" justifyContent="space-between" xs={3} className="tool">
          <SiMongodb className="ToolIcon" />
          MongoDB
        </Grid>
      </Grid>

      <h2>Education:</h2>
      <Grid container xs={12} sm={10} md={8}>
        <Grid xs={12} md={9} className="left">
          Certificate in Full Stack Web Development
        </Grid>
        <Grid xs={12} md={3} className="right">
          November, 2022
        </Grid>
        <Grid xs={12} md={6} className="left">
          University of Washington
        </Grid>
        <Grid xs={12} md={6} className="right">
          Seattle, WA
        </Grid>
      </Grid>
      <Grid container xs={12} sm={10} md={8}>
        <Grid xs={12} md={9} className="left">
          Associate of Science in Computer Networking & Information Tech.
        </Grid>
        <Grid xs={12} md={3} className="right">
          December, 2004
        </Grid>
        <Grid xs={12} md={6} className="left">
          High-Tech Institute
        </Grid>
        <Grid xs={12} md={6} className="right">
          Phoenix, AZ
        </Grid>
      </Grid>             

      <p>Work History:</p>
      {/* Button to download copy of resume */}
      <Button variant="outlined" href={pdf} download>Download Resume</Button>
    </Grid>
    </Container>
    </div>
  );
}