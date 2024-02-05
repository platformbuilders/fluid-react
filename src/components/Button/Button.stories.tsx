import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Botão de Teste',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: {
    children: 'Botão de Teste',
    size: 'normal',
  },
};

export const Medium: Story = {
  args: {
    ...Normal.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Normal.args,
    size: 'large',
  },
};
