import React from 'react';
import { Grid, Container } from '@mui/material';

import Project from "../components/Project"
// Pull in data on projects to be displayed
import data from '../assets/data/Project.data';

export default function Projects({ setCurrentTab }) {

  // Ensures that if site is loaded directly to this page that the proper tab will bet highlighted
  setCurrentTab("projects")

  return (
    <div className="projects">
      <Container>
      <h2 className="title">My Projects:</h2>
      <Grid container spacing={2} justifyContent="center">
        {/* Go through list of projetcs and map them each to their own Project component */}
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
      </Container>
    </div>
  );
}
    