import { storiesOf } from '@storybook/react-native';
import formerrorMarkdown from './formerror.md';

storiesOf('FormError', module)
  .addParameters({
    readme: {
      content: formerrorMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
