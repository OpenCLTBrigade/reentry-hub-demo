import React from 'react';
import { WizardConsumer } from './WizardSwitcher';
import { Redirect } from 'react-router-dom';

export default function WizardRedirect(props) {
  return (
    <WizardConsumer>
      {({ values }) => {
        if (values[props.if] === props.is) {
          return (
            <Redirect to={props.redirectTo} />
          )
        }
      }}
    </WizardConsumer>
  )
}