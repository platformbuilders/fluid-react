import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, within } from '@storybook/testing-library';
import Paper from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'paper-id';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: <h3>Test</h3>,
    elevation: 'z5',
    id: mockTextId,
    square: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Paper | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });
  },
};

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {},
};

export default meta;
