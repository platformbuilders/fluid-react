import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
// import { boolean, text, withKnobs } from '@storybook/addon-knobs';
// import { storiesOf } from '@storybook/react';
// import markdown from './button.md';
import Button from './index';

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .addParameters({
//     readme: {
//       content: markdown,
//     },
//     viewport: {
//       defaultViewport: '',
//     },
//   })
//   .add('Example', () => (
//     <Button
//       onPress={action('clicked')}
//       loading={boolean('loading', false)}
//       transparent={boolean('transparent', false)}
//       disabled={boolean('disabled', false)}
//     >
//       {text('Text', 'Button Test')}
//     </Button>
//   ));

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    testID: { control: 'text' },
  },
  args: {
    children: 'Button test',
    accessibility: 'button',
    onPress: action('clicked'),
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
