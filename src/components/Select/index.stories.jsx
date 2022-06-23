import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import markdown from './select.md';
import Select from './index';

storiesOf('Select', module)
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
    <Select
      style={{ width: 100 }}
      label="Gender"
      error={text('error', '')}
      selectedValue={text('selectedValue', '')}
      values={[
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
      ]}
    />
  ));
