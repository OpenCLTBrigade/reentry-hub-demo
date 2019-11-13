import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

export default function Footer(props) {
  return (
    <AppBar component='footer' position='fixed' color='secondary' style={{ top: 'auto', bottom: 0, padding: '1em' }}>
      <Typography variant='caption'>
        This is an open-source project by <a href="https://opencharlotte.org">Open Charlotte Brigade</a> project that is built in partnership with <a href="http://charlottereentry.org">Re-entry Partners of Mecklenburg</a> and the <a href="https://www.mecknc.gov/CriminalJusticeServices/Pages/ReentryServices.aspx">Re-entry Services of Mecklenburg County</a>.
      </Typography>
    </AppBar>
  )
}