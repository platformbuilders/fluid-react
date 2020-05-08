import React from 'react';
import { storiesOf } from '@storybook/react';
import markdown from './formContainer.md';
import FormContainer from './index';

storiesOf('FormContainer', module)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => <FormContainer />);
