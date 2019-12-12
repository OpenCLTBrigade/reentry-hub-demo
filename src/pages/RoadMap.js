import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Collapse,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}));

const steps = {
  'Idenfication': {
    initialQuestion: {
      title: 'Do you have an ID?',
      fieldType: 'radio',
      name: 'hasId',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  'Housing': {
    initialQuestion: {
      title: 'Have you made housing arrangements?',
      fieldType: 'radio',
      name: 'hasHousing',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  'Employment': {
    initialQuestion: {
      title: 'Do you have employment?',
      fieldType: 'radio',
      name: 'hasEmployment',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  'Transportation': {
    initialQuestion: {
      title: 'Do you need help with transportation?',
      fieldType: 'radio',
      name: 'hasTransport',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  'Food Security': {
    initialQuestion: {
      title: 'Do you need help with food security?',
      fieldType: 'radio',
      name: 'hasFoodSecurity',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  'Health Concerns': {
    initialQuestion: {
      title: 'Do you have health concerns (Physical, Mental, or Substance)?',
      fieldType: 'radio',
      name: 'hasHealthConcerns',
      options: [
        'Yes',
        'No'
      ]
    },
    followUpQuestions: [
      {
        title: 'Do you like kittens?',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  }
};


export default function RoadMap() {
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = useState(0);
  const [ values, setValues ] = useState({
    hasId: 'Yes',
    hasHousing: 'Yes'
  })

  const nextStep = e => setActiveStep(activeStep + 1);
  const lastStep = e => setActiveStep(activeStep - 1);

  const updateField = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const openCollapse = (when, is) => {
    if (values[when] === is) {
      return true;
    }
    return false;
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={3}
    >
      <Grid item style={{ width: '50%' }}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {Object.keys(steps).map((value, index) => {
            const stepData = steps[value];
            return (
              <Step key={`${value}-step-${index}`}>
                <StepLabel>{value}</StepLabel>
                <StepContent>
                  <FormControl>
                    <FormLabel>{stepData.initialQuestion.title}</FormLabel>
                    <RadioGroup row onChange={updateField} name={stepData.initialQuestion.name} value={values[stepData.initialQuestion.name]}>
                      {stepData.initialQuestion.options.map((option, bindex) => (
                        <FormControlLabel
                          key={`${value}-${option}-${bindex}`}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <Collapse in={openCollapse(stepData.initialQuestion.name, 'No')}>
                    {stepData.followUpQuestions.map((followUp, cindex) => (
                      <FormControl>
                        <FormLabel>{followUp.title}</FormLabel>
                        <RadioGroup row>
                          {followUp.options.map((followUpOption, dindex) => (
                            <FormControlLabel
                            key={`${value}-${followUpOption}-${cindex}`}
                            value={followUpOption}
                            control={<Radio />}
                            label={followUpOption}
                          />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    ))}
                  </Collapse>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
      </Grid>
      <Grid item container direction='row' justify='center' alignItems='center' spacing={5}>
        <Grid item>
          <Button color='secondary' onClick={lastStep} disabled={(activeStep <= 0)}>Last Step</Button>
        </Grid>
        {(activeStep < Object.keys(steps).length - 1) &&
          <Grid item>
            <Button variant='contained' color='primary' onClick={nextStep}>Update Step</Button>
          </Grid>}
        {(activeStep === Object.keys(steps).length - 1) &&
          <Grid item>
            <Button variant='contained' color='primary'>Submit Answers</Button>
          </Grid>}
      </Grid>
    </Grid>
  );
}