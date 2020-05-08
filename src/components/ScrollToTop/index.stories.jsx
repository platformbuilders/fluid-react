import { storiesOf } from '@storybook/react';
import markdown from './scrollToTop.md';

storiesOf('ScrollToTop', module)
  .addParameters({
    readme: {
      content: markdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
