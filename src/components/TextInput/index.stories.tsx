import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './index';

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'Name',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};
export const Mask: Story = {
  args: {
    label: 'Cep',
    maskOptions: { mask: '00000-000' },
  },
};
