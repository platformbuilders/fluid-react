import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, within } from '@storybook/testing-library';

import Typography from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'typography-test-id';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Typography Test',
    id: mockTextId,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Typography | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });
  },
};

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {},
};

export default meta;
