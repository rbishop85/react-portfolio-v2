import { Grid } from '@mui/material';
import React from 'react';
import ReactSwitch from "react-switch"
import Navigation from './Navigation';

export default function Header({ currentTab, setCurrentTab, toggleTheme, theme }) {
  return (
    <Grid container spacing={2} className="header">
      <Grid item xs={12}>
        <div className="titlebar">
          <div>
            <h1 className="title">Robert Bishop</h1>
          </div>
          <div className="switch">
            <label> {theme === "dark" ? "Dark " : "Light "} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        {/* Load navigation component */}
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </Grid>
    </Grid>
  );
}