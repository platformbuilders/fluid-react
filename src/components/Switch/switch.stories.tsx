import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import Switch from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'switch-test-id';
const mockOnChange = jest.fn();

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: mockTextId,
    label: 'Switch Test',
    checked: false,
    onChange: mockOnChange,
    variant: 'default',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Switch | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('Switch | Event Click', async () => {
      await userEvent.click(canvas.getByTestId(mockTextId));
      expect(mockOnChange).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export default meta;
