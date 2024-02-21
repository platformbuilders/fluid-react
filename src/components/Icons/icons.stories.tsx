import React from 'react';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, within } from '@storybook/testing-library';
import AbsIcon from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const testId = 'icons-id';

type IconsType = {
  variant?: keyof typeof AbsIcon;
  color: string;
};

const Icons: React.FC<IconsType> = ({
  variant = 'AccessibilityIcon',
  color,
}) => {
  const Component = AbsIcon[variant];

  return (
    <Component id={testId} color={color} style={{ width: 100, height: 100 }} />
  );
};

const meta: Meta<typeof Icons> = {
  title: 'Components/Icon',
  component: Icons,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: '',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Color of the icon',
      type: 'string',
      control: { type: 'color' },
    },
    variant: {
      description:
        'All available icons in: https://mui.com/material-ui/material-icons/',
      options: Object.keys(AbsIcon),
      type: 'string',
      control: { type: 'select' },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Icons | Test Render', async () => {
      expect(canvas.getByTestId(testId)).toBeInTheDocument();
    });
  },
};

type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {},
};

export default meta;
