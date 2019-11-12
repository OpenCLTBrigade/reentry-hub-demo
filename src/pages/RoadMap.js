import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import WizardSwitcher from '../components/WizardComponents/WizardSwitcher';
import WizardProgress from '../components/WizardComponents/WizardProgress';
import WizardPage from '../components/WizardComponents/WizardPage';
import WizardSlide from '../components/WizardComponents/WizardSlide';
import WizardField from '../components/WizardComponents/WizardField';
import WizardButton from '../components/WizardComponents/WizardButton';

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

const questionData = [
  {
    pageId: 1, // Must include pageId. Can either be a string or integer
    pageTitle: 'Employment', // Optional title
    pageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante. Aliquam nec scelerisque lectus. Ut molestie dolor et euismod rhoncus. In erat nunc, accumsan nec rutrum eleifend, maximus quis massa. Nunc urna ipsum, faucibus vitae tincidunt nec, volutpat nec lectus. Aliquam tellus lacus, rhoncus quis sem at, luctus porta nibh. Vivamus ut mauris vel mi tempus commodo. Suspendisse rhoncus tincidunt ipsum, sit amet laoreet nisi tempor a. Praesent efficitur, orci eu sollicitudin suscipit, tortor diam imperdiet turpis, non posuere metus massa sit amet diam.', // Optional subtitle
    fields: [ // At least one field per page is required. Multiple fields are supported.
      {
        label: 'Do you need employment?', // A label for the field, basically the question you're asking
        name: 'needEmployment', // Needs a unique, descriptive name. Camel case preferred.
        fieldType: 'radio', // Type of field. Options are: text, checkbox, radio, and dropdown.
        options: [ // If using dropdown, radio, or checkbox, options must be supplied.
          'Yes',
          'No'
        ]
      }
    ]
  },
  {
    pageId: 2,
    pageTitle: 'Employment',
    fields: [
      {
        label: 'Do you have a diploma or GED certificate?',
        name: 'diplomaOrGED',
        fieldType: 'radio',
        options: [
          'Yes',
          'No'
        ]
      }
    ]
  },
  {
    pageId: 3,
    pageTitle: 'Example of a dropdown question',
    fields: [
      {
        label: 'Please choose a color',
        name: 'color',
        fieldType: 'dropdown',
        variant: 'outlined',
        options: [
          'Red',
          'Orange',
          'Yellow',
          'Green',
          'Blue',
          'Indigo',
          'Violet'
        ]
      }
    ]
  },
  {
    pageId: 4,
    pageTitle: 'Example of a text question',
    fields: [
      {
        label: 'Please enter your SSN',
        name: 'ssn',
        fieldType: 'text',
        variant: 'outlined', // TextField props can be supplied. Supported props: variant, fullWidth, autoFocus, and type.
        fullWidth: true
      }
    ]
  },
  {
    pageId: 5,
    pageTitle: 'Example of a checkbox question',
    fields: [
      {
        label: 'Please pick one',
        name: 'color',
        fieldType: 'checkbox',
        options: [
          'Cats',
          'Dogs',
          'Ferrets'
        ]
      }
    ]
  },
]

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
              <Grid container direction='column' alignContent='center' justify='center'>
                <Grid item>
                  {page.pageTitle && <Typography variant='h3' color='primary' gutterBottom className={classes.formTitle}>{page.pageTitle}</Typography>}
                  {page.pageDescription && <Typography variant='subtitle2' paragraph className={classes.formDescription}>{page.pageDescription}</Typography>}
                </Grid>
                <Grid item>
                  <WizardSlide>
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
                  </WizardSlide>
                </Grid>
              </Grid>
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