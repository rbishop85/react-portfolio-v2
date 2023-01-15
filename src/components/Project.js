import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  // Page layout for each individual project
export default function Project({ id, title, description, group, image, repo, live }) {
  return (
    <Grid item xs={10} md={6} key={id} className="project">
      <Card className="card">
        <Box className="box">
          <CardMedia
            component="img"
            height="100%"
            image={image}
          />
          <Accordion>
            <AccordionSummary
              
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">{title} ({group})</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{description}</Typography>
              <Typography><a href={repo} target="_blank" rel="noreferrer">Repo</a></Typography>
              <Typography><a href={live} target="_blank" rel="noreferrer">Live</a></Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Card>
    </Grid>
  );
}