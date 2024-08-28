import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import Select from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'select-test-id';
const mockOnChange = jest.fn();

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: mockTextId,
    helperMessage: 'Select Test',
    label: 'Select Test',
    value: 'Female',
    style: {},
    styleContentItem: {},
    styleItem: {},
    options: [
      {
        value: 'Male',
        option: 'Male',
      },
      {
        value: 'Female',
        option: 'Female',
      },
    ],
    onValueChange: mockOnChange,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Select | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('Radio | Select Male', async () => {
      await userEvent.click(canvas.getByTestId(mockTextId));
      await userEvent.click(canvas.getByText('Male'));
      expect(mockOnChange).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export default meta;
