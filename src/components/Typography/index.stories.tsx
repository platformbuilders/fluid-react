import type { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  args: {
    children: 'Text',
    variant: 'xl',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
