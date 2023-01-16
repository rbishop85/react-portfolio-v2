import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  // Page layout for each individual project
export default function Project({ id, title, description, tech, group, image, repo, live }) {
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
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">{title} ({group})</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
              <Typography>-</Typography>
              <Typography>Tech Used: {tech}</Typography>
              <Typography>-</Typography>
              <Typography>Repo: <a href={repo} target="_blank" rel="noreferrer">{repo}</a></Typography>
              <Typography>Live: <a href={live} target="_blank" rel="noreferrer">{live}</a></Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Card>
    </Grid>
  );
}