import type { Meta, StoryObj } from '@storybook/react';

import Link from './index';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  args: {
    children: 'Text to link',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
