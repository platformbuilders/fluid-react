import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import markdown from './textInput.md';
import TextInput from './index';

storiesOf('TextInput', module)
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
    <TextInput
      label={text('label', 'Name')}
      name={text('name', 'name')}
      placeholder={text('placeholder', 'Your Name')}
      fullWidth={boolean('fullWidth', false)}
      autoFocus={boolean('autoFocus', false)}
      maskType="cep"
    />
  ));
