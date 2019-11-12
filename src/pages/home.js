import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

export default function TheProject(props) {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}
      style={{ padding: '2em' }}
    >
      <Grid item>
        <Typography variant='h2' color='primary' gutterBottom>Re-entry Hub</Typography>
      </Grid>

      <Grid item>
        <Button color='secondary' variant='outlined' size='large' href='/roadmap'>
          Start your Road Map
        </Button>
      </Grid>
      <Grid item>
        <Button color='secondary' variant='outlined' size='large' href='/the-project'>
          Learn about the project
        </Button>
      </Grid>
    </Grid>
  )
}
