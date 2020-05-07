import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import markdown from './button.md';
import Button from './index';

storiesOf('Button', module)
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
    <Button
      onPress={action('clicked')}
      loading={boolean('loading', false)}
      secondary={boolean('secondary', false)}
      transparent={boolean('transparent', false)}
      disabled={boolean('disabled', false)}
    >
      {text('Text', 'Button Test')}
    </Button>
  ));
