import { storiesOf } from '@storybook/react-native';
import textInputMarkdown from './textInput.md';

storiesOf('Text Input', module)
  .addParameters({
    readme: {
      content: textInputMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
