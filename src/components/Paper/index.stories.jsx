import React from 'react';
import { storiesOf } from '@storybook/react';
import markdown from './paper.md';
import Paper from './index';

storiesOf('Paper', module)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <Paper>
      <h4>Simple Wrapper</h4>
    </Paper>
  ));
