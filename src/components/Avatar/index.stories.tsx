import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  args: {
    onPress: () => console.log('press'),
    src: 'https://toppng.com/uploads/preview/avatar-png-11554021661asazhxmdnu.png',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
