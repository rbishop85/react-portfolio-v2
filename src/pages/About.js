import React from 'react';
import { Grid, Container } from '@mui/material';

import selfImage from '../assets/images/me.jpg'

export default function About({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("about")

  return (
    <div className="about">
      <Container disableGutters>
        <Grid container direction="column" alignItems="center">
          {/* Picture of me */}
          <img src={selfImage} alt="Me in front of some trees" className="image"/>
        
          {/* Brief section talking about myself */}
          <p>
            My name is Robert Bishop and I'm a Full-Stack Developer recently graduated from the Web Coding Bootcamp run by the University of Washington. I've had an interest in computers going back to when I started tinkering with my personal computer in high school. After high school I pursued an Associates program in computer networking through a tech college in Arizona before returning to my home in the PNW.
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
        </Grid>
      </Container>
    </div>
  );
}