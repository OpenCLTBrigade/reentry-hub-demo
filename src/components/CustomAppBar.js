import React from 'react';
import { AppBar, Toolbar, Typography, ButtonGroup, Button, Hidden, Grid } from '@material-ui/core';

export default function CustomAppBar(props) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h5'>Re-entry Roadmap</Typography>
          </Grid>
          <Grid item>
            <Hidden smDown>
              <ButtonGroup color='inherit' variant='text' size='large'>
                <Button href='/'>Home</Button>
                <Button href='/roadmap'>Road Map</Button>
                <Button href='/the-project'>The Project</Button>
              </ButtonGroup>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}