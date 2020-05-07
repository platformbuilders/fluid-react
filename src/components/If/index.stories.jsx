import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import markdown from './if.md';

storiesOf('If', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
