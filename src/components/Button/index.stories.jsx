import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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
      transparent={boolean('transparent', false)}
      disabled={boolean('disabled', false)}
    >
      {text('Text', 'Button Test')}
    </Button>
  ));
