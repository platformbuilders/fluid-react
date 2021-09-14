import React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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
      variant="filled"
    />
  ));
