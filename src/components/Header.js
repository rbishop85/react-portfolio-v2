import { Grid } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';

// In-line styling
const styles = {
    header: {
      overflow: 'auto',
      paddingTop: 25,
      paddingBottom: 25,
      borderBottom: "3px solid #007b6d"
    },
    title: {
      marginTop: 0,
      marginBottom: 0
    }
  };

export default function Header({ currentTab, setCurrentTab }) {
  return (
    <Grid container spacing={2} style={styles.header}>
      <Grid item xs={12} md={3}>
        <h1 style={styles.title}>Robert Bishop</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* Load navigation component */}
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Grid>
    </Grid>
  );
}