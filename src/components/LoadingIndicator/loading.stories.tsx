import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, within } from '@storybook/testing-library';
import LoadingIndicator from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTxt = 'paper-id';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    large: true,
    accessibility: mockTxt,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('LoadingIndicator | Test Render', async () => {
      expect(canvas.getByTestId('loading')).toBeInTheDocument();
    });
  },
};

type Story = StoryObj<typeof LoadingIndicator>;

export const Circular: Story = {
  args: {
    variant: 'circular',
  },
};

export const Linear: Story = {
  args: {
    variant: 'linear',
  },
};

export default meta;
