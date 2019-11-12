import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import { isEqual } from 'lodash'

export default function WizardCondition(props) {
  return (
    <WizardConsumer>
      {({ values }) => (isEqual(values[props.when], props.is) ? props.children : null)}
    </WizardConsumer>
  )
}