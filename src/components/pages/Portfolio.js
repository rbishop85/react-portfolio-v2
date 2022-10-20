import React from 'react';
import data from '../Portfolio.data';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const styles = {
  section: {
    // background: '#e8eaf6',
  }
};

export default function Portfolio() {
  return (
    <div style={styles.section}>
      <h2>Portfolio Page</h2>
      <Grid container spacing={2} justifyContent="center">
        {data.map(({ id, title, description, image }) => (
          <Grid item xs={10} md={5} key={id}>
            <Card>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={image}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: "25%",
                    left: 0,
                    // width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.70)',
                    color: '#D3D3D3',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body2">
                  <p>
                    Github Repo:
                  </p>
                  <p>
                    Live App:
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
    