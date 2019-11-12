import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import { Slide } from '@material-ui/core';

export default function WizardSlide(props) {
  return (
    <WizardConsumer>
      {({ slideIn, slideDirection }) => <Slide mountOnEnter unmountOnExit in={slideIn} direction={slideDirection}>{props.children}</Slide>}
    </WizardConsumer>
  )
}