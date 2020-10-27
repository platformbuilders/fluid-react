import { storiesOf } from '@storybook/react-native';
import iconMarkdown from './icon.md';

storiesOf('Icon', module)
  .addParameters({
    readme: {
      content: iconMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
