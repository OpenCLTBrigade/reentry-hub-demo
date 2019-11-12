import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import { LinearProgress } from '@material-ui/core';

export default function WizardPropgress(props) {
  return (
    <WizardConsumer>
      {({ progress }) => <LinearProgress variant='determinate' value={progress}/>}
    </WizardConsumer>
  )
}