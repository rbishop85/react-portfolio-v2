import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

  // Page layout for each individual project
export default function Project({ id, title, description, image, repo, live }) {
  return (
    <Grid item xs={10} md={6} key={id} className="project">
      <Card className="card">
        <Box className="box">
          <CardMedia
            component="img"
            height="100%"
            image={image}
          />
          <Box className="details">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <a href={repo} target="_blank">Repo</a>
              </Grid>
              <Grid item>
                <a href={live} target="_blank">Live</a>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Card>
    </Grid>
  );
}