import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from "@mui/material";

import data from '../Project.data';

const styles = {
  box: {
    border: "3px solid #007b6d",
    backgroundColor: "#000000",
    color: "#D3D3D3"
  }
};

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio Page</h2>
      <Grid container spacing={2} justifyContent="center">
        {data.map(({ id, title, description, image }) => (
          <Grid item xs={10} md={6} key={id}>
            <Card style={styles.box}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={image}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: "0%",
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.70)',
                    color: '#D3D3D3',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>

                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <a href="www.github.com">Repo</a>
                    </Grid>
                    <Grid item>
                      <a href="www.github.com">Live</a>
                    </Grid>
                  </Grid>

                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
    