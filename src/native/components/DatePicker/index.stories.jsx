import { storiesOf } from '@storybook/react-native';
import datepickerMarkdown from './datepicker.md';

storiesOf('DatePicker', module)
  .addParameters({
    readme: {
      content: datepickerMarkdown,
    },
    viewport: {
      defaultViewport: '',
    },
  })
  .add('Example', () => {});
