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
      <h2>My Tools</h2>
      <Grid container justifyContents="center" xs={10} md={6}>
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
      <p>Education:</p>
      <p>Work History:</p>
      {/* Button to download copy of resume */}
      <Button variant="outlined" href={pdf} download>Download Resume</Button>
    </Grid>
    </Container>
    </div>
  );
}