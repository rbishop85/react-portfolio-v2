import React from 'react';
import { Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';

// Pulling in icons for my list of tools
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiReact, SiMysql, SiMongodb } from 'react-icons/si'

// Store pdf of resume in variable
import pdf from '../assets/pdf/resume.pdf';

export default function Resume({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("resume")

  return (
    <div className="resume">
    <Container disableGutters>
      <Grid container direction="column" alignItems="center">
        {/* Button to download copy of resume */}
        <Button variant="outlined" href={pdf} target="_blank">View/Download Resume</Button>
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
          <div class="education left">
            <ul>
              <li>
                <div class="date">November, 2022</div> 
                <div class="info">
                  <p>University of Washington - Seattle, WA</p> 
                  <p>Certificate in Full Stack Web Development</p>
                </div>
              </li>
              <li>
                <div class="date">December, 2004</div>
                <div class="info">
                  <p>High-Tech Institute - Phoenix, AZ</p> 
                  <p>Associate of Science in Computer Networking & Information Tech</p>
                </div>
              </li>
            </ul>
          </div>
        </Grid>

        <h2>Work Experience:</h2>
        <Grid container xs={12} sm={10} md={8}>
          <div class="work left">
            <ul>
              <li>
                <div class="date">2011-Present</div> 
                <div class="info">
                  <p>Kelley Connect (Merged from Michael Business Machines)</p>
                  <p>Bellingham, WA</p>
                  <p>Copier Service Technician</p>
                </div>
              </li>
              <li>
                <div class="date">2006-2011</div>
                <div class="info">
                  <p>Absorption Corp. (now known as Healthy Pet)</p>
                  <p>Ferndale, WA</p>
                  <p>Graveyard Shift Second Lead</p>
                </div>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}