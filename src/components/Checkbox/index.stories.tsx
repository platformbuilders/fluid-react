import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from './index';

const meta: Meta<typeof CheckBox> = {
  title: 'CheckBox',
  component: CheckBox,
  args: {
    checked: false,
    label: 'Enable Notification',
    error: 'here is error message',
    name: 'message',
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {};
