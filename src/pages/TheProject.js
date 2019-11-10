import React from 'react';
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
          Welcome to our project page. We’re so excited that you’re interested in helping us create this project. To start you off, we will tell you why we believe this project is so important, some history, our impact goals and how to get involved.
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
            <Typography variant='body1' paragraph>
            As a couple of family members re-enter their communities from long-term incarceration, Jill was interested in the process. With resources and a strong family support system, she was surprised to see them still struggling to meet the expectations placed upon them. If this process is difficult with resources? It must be impossible without them. How do people succeed? And what can we do to make this process easier?
            Fortunately, at about the same time, Melissa from Changed Choices contact Jill about doing a project together. And a project was born!
            <br/><br/>
            Our first phase was interviewing the community to find out what they need to help increase their success. Here's a <a href="https://drive.google.com/drive/u/2/folders/0B_1lAkQK3oVDYUd3dFdZSGRWNms">report</a> on our findings and came up with this project to meet the most pressing of their needs.
            </Typography>
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

            To learn more about our Intended Impact, check out our <a href="/impact-cascade">Impact Cascade and Metrics</a>.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  )
}
