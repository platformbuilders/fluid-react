import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import Radio from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'radio-test-id';
const mockOnChange = jest.fn();

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: mockTextId,
    label: 'Radio Test',
    group: 'radio-test',
    onChange: mockOnChange,
    disabled: false,
    checked: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Radio | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('Radio | Event Click', async () => {
      await userEvent.click(canvas.getByTestId(mockTextId));
      expect(mockOnChange).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export default meta;
