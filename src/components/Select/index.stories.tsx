import type { Meta, StoryObj } from '@storybook/react';

import Select from './index';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    defaultValue: 'Female',
    options: [
      {
        value: 'Male',
        option: 'Male',
      },
      {
        value: 'Female',
        option: 'Female',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
