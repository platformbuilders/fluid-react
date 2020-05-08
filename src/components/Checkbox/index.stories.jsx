import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import markdown from './checkbox.md';
import CheckBox from './index';

storiesOf('CheckBox', module)
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
    <CheckBox
      checked={boolean('checked', false)}
      label={text('label', 'Enable Notification')}
      error={text('error', 'here is error message')}
      name={text('name', 'message')}
    />
  ));
