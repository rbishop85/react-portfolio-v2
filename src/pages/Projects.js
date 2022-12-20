import React from 'react';
import { Grid, Container } from '@mui/material';
// Pulling in npm for displaying my github calendar
import GitHubCalendar from "react-github-calendar";

import Project from "../components/Project"
// Pull in data on projects to be displayed
import data from '../assets/data/Project.data';

export default function Projects({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("projects")

  return (
    <div className="projects">
      <Container disableGutters>
        <Grid container spacing={2} justifyContent="center">
          {/* Go through list of projects and map them each to their own Project component */}
          {data.map(({ id, title, description, image, repo, live }) => (
            <Project
              id={id}
              title={title}
              description={description}
              image={image}
              repo={repo}
              live={live}
            />
          ))}
        </Grid>
        <div className="divider" />
        <Grid container justifyContent="center">
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
    