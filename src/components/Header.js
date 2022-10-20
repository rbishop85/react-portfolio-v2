import { Grid } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';

const styles = {
    header: {
      // background: '#e8eaf6',
      overflow: 'auto',
      paddingTop: 25,
      paddingBottom: 25,
      borderBottom: "3px solid #FFFFFF"
    },
    title: {
      marginTop: 0,
      marginBottom: 0
    }
  };

export default function Header({ handlePageChange }) {
  return (
    <Grid container spacing={2} style={styles.header}>
      <Grid item xs={12} md={3}>
        <h1 style={styles.title}>Robert Bishop</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        <Navigation handlePageChange={handlePageChange} />
      </Grid>
    </Grid>
  );
}