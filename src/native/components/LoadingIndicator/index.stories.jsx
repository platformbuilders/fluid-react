import { storiesOf } from '@storybook/react-native';
import loadingIndicatorMarkdown from './loadingIndicator.md';

storiesOf('Loading Indicator', module)
  .addParameters({
    readme: {
      content: loadingIndicatorMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
