import type { Meta, StoryObj } from '@storybook/react';
import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  args: {
    label: 'Anônimo',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
