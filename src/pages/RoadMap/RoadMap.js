import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import WizardSwitcher from '../../components/WizardComponents/WizardSwitcher';
import WizardProgress from '../../components/WizardComponents/WizardProgress';
import WizardPage from '../../components/WizardComponents/WizardPage';
import WizardSlide from '../../components/WizardComponents/WizardSlide';
import WizardField from '../../components/WizardComponents/WizardField';
import WizardButton from '../../components/WizardComponents/WizardButton';
import { questionData } from './questionsData';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  formPaper: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(43)
  },
  formDescription: {
    maxWidth: theme.spacing(43)
  },
  formTitle: {
    maxWidth: theme.spacing(43)
  }
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();

  return (
    <WizardSwitcher>
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='column'
      >
        <Grid item style={{ width: '100%', marginBottom: '4vh' }}>
          <WizardProgress />
        </Grid>
        <Grid item>
          {questionData.map((page, index) => (
            <WizardPage pageId={page.pageId} key={`page-${index}`}>
              <WizardSlide>
                <Grid container direction='row' alignContent='center' justify='center' spacing={5}>
                  <Grid item container direction='column' alignContent='center' justify='flex-start' spacing={1} xs={6}>
                    <Grid item>
                      {page.pageTitle && <Typography variant='h3' color='primary' gutterBottom className={classes.formTitle}>{page.pageTitle}</Typography>}
                    </Grid>
                    {page.pageDescription.map((text, i) => (
                      <Grid item key={`description-grid-${i}`}>
                        <Typography key={`description-text-${i}`} variant='subtitle2' paragraph className={classes.formDescription}>{text}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={5} className={classes.formPaper}>
                      {page.fields.map((question) => (
                        <WizardField
                          key={`${page.formId}-${question.name}`}
                          questionLabel={question.label}
                          name={question.name}
                          fieldType={question.fieldType}
                          finePrint={question.finePrint}
                          paymentDetails={question.paymentDetails}
                          TextFieldProps={{
                            variant: question.variant,
                            fullWidth: question.fullWidth,
                            autoFocus: question.autoFocus,
                            type: question.type,
                          }}
                          TypographyProps={{
                            variant: 'h6',
                            gutterBottom: true
                          }}
                          options={question.options}
                          subscribedFields={question.subscribedFields}
                        />
                      ))}
                    </Paper>
                  </Grid>
                </Grid>
              </WizardSlide>
            </WizardPage>
          ))}
        </Grid>

        <div style={{ margin: '2vh' }} />

        <Grid
          item
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <WizardButton variant='contained' color='secondary' mode='previous' buttonLabel='Back' />
          <WizardButton variant='contained' color='primary' mode='next' buttonLabel='Next' />
          <WizardButton variant='contained' color='primary' mode='submit' buttonLabel='Generate Roadmap' />
        </Grid>

        {/* margin under buttons to prevent them from being clipped by hidden overflow */}
        <div style={{ margin: '2vh' }} />
      </Grid>
    </WizardSwitcher>
  );
}
