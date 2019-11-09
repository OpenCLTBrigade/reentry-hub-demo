import React from 'react';
import { Typography, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function About(props) {
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
          Welcome to our project page. If you’re here you’re interested in helping us create this project. To start you off, we will tell you why we believe this project is so important, some history, our impact goals and how to get involved.
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
            <img alt='placeholder kitten' src='https://placekitten.com/g/500/500' height='auto' />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Where did this project come from?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img alt='placeholder kitten' src='https://placekitten.com/g/500/500' height='auto' />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>What are the impact goals of the project?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            Our primary project goal is to reduce the anxiety around re-entering our community after incarceration. After speaking with dozens of our community members who have and/or are re-entering we quickly realized that anxiety and feeling overwhelmed is a huge obstacle. So, we started thinking about how do we help reduce that anxiety? This is the solution that we came up with and we’re delighted to have these same community members agree. 

            Of course, we are looking to make large systemic change and affect the recidivism rate in Mecklenburg County. However, since we are a community organization, we are looking to create change on an individual level too. 

            To learn more about our Intended Impact, check out our Impact Cascade and Metrics (link to hidden page on site)

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  )
}