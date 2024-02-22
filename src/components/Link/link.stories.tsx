import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import Link from './index';

//  Mocks
const mockTxt = 'Link Test';
const mockFn = jest.fn();

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the link',
      control: {
        type: 'text',
      },
    },
    onPress: {
      description: 'The function to be called when the link is clicked',
      action: 'clicked',
      control: {
        type: null,
      },
    },
  },
  args: {
    children: mockTxt,
    onPress: mockFn,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Link | Test Render', async () => {
      expect(canvas.getByText(mockTxt)).toBeInTheDocument();
    });

    await step('Link | Test Click', async () => {
      await canvas.getByText(mockTxt).click();
      expect(mockFn).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {},
};

export default meta;
