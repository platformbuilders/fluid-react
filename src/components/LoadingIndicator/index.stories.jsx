import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import markdown from './loadingIndicator.md';
import LoadingIndicator from './index';

const sizeOptions = ['small', 'medium', 'large'];

storiesOf('LoadingIndicator', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <LoadingIndicator size={select('size', sizeOptions, 'small')} />
  ));
