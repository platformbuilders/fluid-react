import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
      onChange={(value) => console.log(value)}
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
