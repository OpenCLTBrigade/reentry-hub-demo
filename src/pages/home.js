import React from 'react';
import { Typography, Grid } from '@material-ui/core';

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
        <Typography variant='h2' gutterBottom>Re-entry Hub</Typography>
      </Grid>

      <Grid item>
        <Typography paragraph>
          This is an open-source project by <a href="https://opencharlotte.org">Open Charlotte Brigade</a> project that is built in partnership with <a href="http://charlottereentry.org">Re-entry Partners of Mecklenburg</a> and the <a href="https://www.mecknc.gov/CriminalJusticeServices/Pages/ReentryServices.aspx">Re-entry Services of Mecklenburg County</a>.
        </Typography>
      </Grid>
    </Grid>
  )
}
