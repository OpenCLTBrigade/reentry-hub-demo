import React from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { WizardConsumer } from './WizardSwitcher';
import PropTypes from 'prop-types';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';

function WizardButton(props) {
  if (props.mode === 'next') {
    return (
      <WizardConsumer>
        {({ nextPage, isLastPage, runValidation }) => {
          // De-render the next button if we're on the last page.
          if (isLastPage) {
            return null;
          }
          return (
            <Grid item>
              <Button
                color={props.color}
                variant={props.variant}
                onClick={() => {
                  // If there are no validation errors, call the nextPage method.
                  if (!runValidation()) {
                    nextPage()
                  }
                }}
              >
                {props.buttonLabel}
                <ArrowForwardIos fontSize='small'/>
              </Button>
            </Grid>
          )
        }}
      </WizardConsumer>
    );
  }
  if (props.mode === 'previous') {
    return (
      <WizardConsumer>
        {({ previousPage, isFirstPage }) => {
          // De-render the previous button if we're on the first page.
          if (isFirstPage) {
            return null;
          }
          return (
            <Grid item>
              <Button color={props.color} variant={props.variant} onClick={() => previousPage()}>
                <ArrowBackIos fontSize='small' />
                {props.buttonLabel}
              </Button>
            </Grid>
          )
        }}
      </WizardConsumer>
    );
  }
  if (props.mode === 'submit') {
    return (
      <WizardConsumer>
        {({ isLastPage, submitDisabled }) => {
          if (!isLastPage) {
            return null;
          }
          return (
            <Grid item>
              <Button color={props.color} variant={props.variant} type='submit' disabled={submitDisabled} size={props.size}>
                {(submitDisabled) ? <CircularProgress size={25} /> : props.buttonLabel}
              </Button>
            </Grid>
          )
        }}
      </WizardConsumer>
    )
  }
}

WizardButton.propTypes = {
  mode: PropTypes.string.isRequired
}

export default WizardButton;