import React from 'react'
import { Typography, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <Typography variant='h2' gutterBottom>The Project</Typography>
      </Grid>

      <Grid item>
        <Typography paragraph>
        </Typography>
      </Grid>

      <Grid item style={{ width: '100%' }}>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Why is this project important?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        
      </Grid>
    </Grid>
  )
}
