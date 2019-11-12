import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import { Collapse } from '@material-ui/core';
import { isEqual } from 'lodash';

export default function WizardCollapse(props) {
  return (
    <WizardConsumer>
      {({ values }) => <Collapse in={isEqual(values[props.when], props.is)}>{props.children}</Collapse>}
    </WizardConsumer>
  )
}