import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import markdown from './touchable.md';
import Touchable from './index';

storiesOf('Touchable', module)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => (
    <Touchable onPress={action('clicked')}>Tap Here</Touchable>
  ));
