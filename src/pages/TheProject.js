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
        <Typography color='primary' variant='h2' gutterBottom>The Project</Typography>
      </Grid>

      <Grid item>
        <Typography paragraph variant='subtitle1'>
          Welcome to our project page. We’re so excited that you’re interested in helping us create this project. To start you off, we will tell you why we believe this project is so important, some history, our impact goals and how to get involved.
          </Typography>
      </Grid>

      <Grid item style={{ width: '100%' }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>Why is this project important?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            Where to begin? We firmly believe that <i>Justice is getting the implementation right</i>. The effects of mass incarceration is so far reaching in our communities. There is so much to tackle in that realm that simply can’t address it all, but it says so much about the values of our society that once someone has “paid their debt to society” that it is still so difficult to successfully re-enter society.
            <br/><br/>
            Our friends at <a href="https://insideoutnetwork.net/landing">Inside-Out Network</a> describe it best:
            “They call it “re-entry” these days. It sounds a little cold and clinical at first, but when you think about it, it’s actually a pretty good term. It reminds us that returning to the outside after time in prison is like a spacecraft coming back to earth. You may have heard that the re-entry phase is the most dangerous part of the whole process of space flight. Lots of things can go wrong for a spacecraft coming back into the atmosphere. It can come in too fast and burn up. It can miscalculate and crash land. What’s needed is a carefully thought-out plan – a safe glide path back home for a safe landing.
            It’s no different for an inmate re-entering the outside world. After being locked up for a while, we’re no longer used to the outside atmosphere. We can foolishly take things too quickly or too impulsively, and simply crash and burn. What we need is a carefully thought-out (and prayed-over) plan to create a safe glide path for ourselves in our first six months after release.
            That’s what we need, but that’s not what we always do. Nearly all of us go through our own case of “short-timer’s disease:” unrealistic expectations, a lack of careful planning and communication, the awkward experience to adapting to life on the outside, and the sobering realization that life is wonderful, but hard.”
            <br/><br/>
            We love this analogy. The atmosphere is designed to make it difficult to re-enter, not unlike the structures built into society. Which is why we are so dedicated to making this a better process.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>Where did this project come from?</Typography>
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
            <Typography variant='h5'>What are the impact goals of the project?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            Our primary project goal is to reduce the anxiety around re-entering our community after incarceration. After speaking with dozens of our community members who have and/or are re-entering we quickly realized that anxiety and feeling overwhelmed is a huge obstacle. So, we started thinking about how do we help reduce that anxiety? This is the solution that we came up with and we’re delighted to have these same community members agree.
            <br/><br/>
            Of course, we are looking to make large systemic change and affect the recidivism rate in Mecklenburg County. However, since we are a community organization, we are looking to create change on an individual level too.
            <br/><br/>
            To learn more about our Intended Impact, check out our <a href="/impact-cascade">Impact Cascade and Metrics</a>.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>What scale are we hoping for this project?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            To help maximize our impact, we try to start small but always keep an eye on how we want to scale a project. With this in mind, we’ve thought about how we want to scale this project.
            <br/><br/>
            We are building this for Mecklenburg County. However, to make this a truly useful tool, we know that we need to have county resources for other counties in North Carolina. Once it is a statewide tool, we can look at adding resources for other states.
            <br/><br/>
            Additionally, our partners at Re-entry Services of Mecklenburg have stated that they would love to see this tool as a Roadmap for Active Time and for Juvenile incarceration. We are excited about all of the potential uses and impact this project will have.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h5'>How do I get involved?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant='body1' paragraph>
            <ul>
              <li><b>What are we looking for?</b></li>
              Right now, we are looking for people who’d be interested in helping us research and design the project. It is important to have developers involved in these conversations but before we can really start to build the code, we need to understand the best way to execute the project before starting the code base.
              <li><b>What do I do first?</b></li>
                <ol>
                <li>Go to the Trello board (linked below) and read the Onboarding, Resources, What We’ve Learned and Are We Making An Impact columns. We hope that we’ve designed that to answer all your questions and more but if you still have some, please reach out to <a href="mailto:jill@opencharlotte.org">Jill</a>.</li>
                <li>Join the Brigade. Go to brigade.opencharlotte.org and register. This will also send you an invite to our Slack. This is the primary way we communicate and gives you access to the chat will all brigade members. Additionally you’ll want to join the #reentryhub channel. Have questions about slack? Hit @jillzey up on a Direct Message.</li>
                <li>If you’re ready to assign a task to yourself, request to join the team on Trello and ping Jill in Slack. Once your added to the team, you can assign a task to yourself and get going.</li>
                </ol>
              <br/><br/>
              <li><b>Our tools</b></li>
                <ul>
                <li>Project Management: We are currently using <a href="https://trello.com/b/tmveVJ1s/re-entry-project">Trello</a> for the project management. This could change in the future but are trying to keep the info that we gather in a good place to share. It is a public board, which means you don’t need to be a team member to see the project</li>
                <li>Resource Collection Spreadsheet: We've started collecting the resource providers that will be in the tool in a <a href="https://docs.google.com/spreadsheets/d/1CDBAlLS8dQeLNmyU47xrlfvf3C27w_yDBb196v7Zzzg/edit?usp=sharing">Google Sheet</a>.</li>
                <li>Code Repo: Our code is kept in a <a href="https://github.com/OpenCLTBrigade/re-entry-hub">Github Repo</a>.</li>
                </ul>
            </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </Grid>
    </Grid>
  )
}
