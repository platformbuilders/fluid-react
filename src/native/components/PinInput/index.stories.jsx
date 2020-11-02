import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PinInput from './index';
import PinInputMarkdown from './pinInput.md';

storiesOf('PinInput', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: PinInputMarkdown,
      sidebar: PinInputMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Simple example', () => (
    <PinInput onChangeText={action('PinInput-change-text')} />
  ));
