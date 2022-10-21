import React from 'react';
import { Grid } from '@mui/material';

import Project from "../Project"
import data from '../Project.data';

const styles = {
  title: {
    textAlign: "center"
  }
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.title}>My Projects:</h2>
      <Grid container spacing={2} justifyContent="center">
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
    </div>
  );
}
    