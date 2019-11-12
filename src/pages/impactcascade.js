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
        <Typography color='primary' variant='h2' gutterBottom>Our Impact Cascade</Typography>
      </Grid>

      <Grid item>
        <Typography paragraph variant='subtitle1'>
          To ensure that we are creating a tool that has the desired impact, we have created milestones and metrics through the entire process. Milestones and metrics can (and often do) change as we are moving through the project. We are always changing and re-iterating based on user research and feedback. As it stands, here is our Impact Cascade for this project:
        </Typography>
      </Grid>

      <Grid item style={{ width: '100%' }}>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>During the project research</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
              This metric is to measure community participation in the project research process:
                <li>Total people giving input: 70 interviews conducted</li>
                <li>Total partner signed on for tool creation and adoption: 20</li>
                <li>Community members doing user testing: 12</li>
                <li>Total number of user tests completed: 3 rounds</li>
                <li>Total resources provided in tool: TBD</li>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>During the user testing</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            We are interested in measuring during user testing what are the most needed uses of the tool.
              <li>What are the initial reactions to the tool: Generally positive. Needs more refinement on language used to ask questions.</li>
              <li>What area of resources are most requested: We decided to begin with Employment. However, that decision was met with positive feedback.</li>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>While the tool is being used by users</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
              We are interested in measuring if there is a place where the users have difficulty or quit. So there will need to be analytics placed throughout the tool.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>The intended beneficiary impact</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
              The ultimate goal with the project is to reduce the anxiety and feeling of being overwhelmed that individuals feel upon exiting incarceration. To measure that we think the best option (previous to user testing) will be to add a feedback loop at the end of the tool. We'd also like them to gauge their anxiety levels in that survey.
                <li>How often do the users opt to give feedback at the end: TBD</li>
                <li>How many users feel more prepared and less anxious: TBD</li>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>The intended systemic impact</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
              For lasting change we need to reach our goal of getting this tool inside facilities where it can help people as early as possible.
                <li>The number of re-entry centers and facilities where the tool is used: TBD</li>
                <li>How many partners are using the tool with their clients: TBD</li>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </Grid>
    </Grid>
  )
}
