import React from 'react';
import { Grid, Container } from '@mui/material';
// Pulling in npm for displaying my github calendar
import GitHubCalendar from "react-github-calendar";
// Pulling in icons for my list of tools
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiReact, SiMysql, SiMongodb } from 'react-icons/si'

import selfImage from '../assets/images/me.jpg'

export default function About({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("about")

  return (
    <div className="about">
      <Container>
      <Grid container direction="column" alignItems="center">
        {/* Picture of me */}
      <img src={selfImage} alt="Me in front of some trees" className="image"/>
      
      {/* Brief section talking about myself */}
      <h2>About Me</h2>
      <p>
        Welcome to my portfolio. My name is Robert Bishop and I'm currently a student in a Web Coding Bootcamp being run by the University of Washington. I've had an interest in computers going back to when I started tinkering with my personal computer in high school. After high school I pursued an Associates program in computer networking through a tech college in Arizona before returning to my home in the PNW.
      </p>
      <p>
        After college I held on to the interest but didn't really pursue IT work in a professional capacity. For the past 11 years I've been working for a local copy machine dealer handling both hardware and connectivity service calls. A few months back I started talking to a family member about this Coding Bootcamp, the more I read up on it the more I felt like it would be the perfect fit for me. I really enjoy working through the process of trying to take an idea that's in my mind and spending time creating it in code.
      </p>
      <p>
        When I'm not in class or at work I spend most of my time with my wife and son. I also enjoy tinkering with the project car in the garage and occasionally attending concerts with my wife.
      </p>
      <p>
        I'm looking forward to opportunities to both test and prove my capabilities, as well as simply learn new things.
      </p>
      <div className="divider" />
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
      <div className="divider" />
      <h2>Coding Activity</h2>
      <GitHubCalendar
      // Configuration for github commit calendar display
        username="rbishop85"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
      </Grid>
      </Container>
    </div>
  );
}