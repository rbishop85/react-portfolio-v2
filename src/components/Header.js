import { Grid } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentTab, setCurrentTab }) {
  return (
    <Grid container spacing={2} className="header">
      <Grid item xs={12}>
        <h1 className="title">Robert Bishop</h1>
      </Grid>
      <Grid item xs={12}>
        {/* Load navigation component */}
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Grid>
    </Grid>
  );
}