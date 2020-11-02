import { storiesOf } from '@storybook/react-native';
import radioButtonMarkdown from './radioButton.md';

storiesOf('Radio Button', module)
  .addParameters({
    readme: {
      content: radioButtonMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
