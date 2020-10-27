import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Touchable from './index';
import touchableMarkdown from './touchable.md';

storiesOf('Touchable', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: touchableMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Simple example', () => (
    <Touchable
      disabled={boolean('disabled', false)}
      onPress={action('button-click')}
    >
      {text('Text', 'Touchable Text')}
    </Touchable>
  ));
