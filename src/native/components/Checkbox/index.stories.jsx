import { storiesOf } from '@storybook/react-native';
import checkboxMarkdown from './checkbox.md';

storiesOf('CheckBox', module)
  .addParameters({
    readme: {
      content: checkboxMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
