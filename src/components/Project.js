import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const styles = {
    box: {
      border: "3px solid #007b6d",
      backgroundColor: "#000000",
      color: "#D3D3D3"
    }
  };

export default function Project({ id, title, description, image, repo, live }) {
  return (
    <Grid item xs={10} md={6} key={id} className="project">
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