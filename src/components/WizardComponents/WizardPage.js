import React from 'react';
import { WizardConsumer } from './WizardSwitcher';

export default function WizardPage(props) {
  return (
    <WizardConsumer>
      {({ page, recordWizardPageIds }) => {
        recordWizardPageIds(props.pageId);
        if (page !== props.pageId) {
          return null
        }
        return props.children
      }}
    </WizardConsumer>
  )
}