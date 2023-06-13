import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import markdown from './button.md';
import Radio from './index';

storiesOf('Radio', module)
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
    <Radio
      label="Anônimo"
      checked={isAnonymous}
      onChange={handleIsAnonymous}
      variant="secondary"
    />
  ));
