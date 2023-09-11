import type { Meta, StoryObj } from '@storybook/react';
import Paper from './index';

const meta: Meta<typeof Paper> = {
  title: 'Paper',
  component: Paper,
  args: {
    children: <h4>teste</h4>,
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {};
