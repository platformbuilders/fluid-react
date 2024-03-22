import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import RadioGroup from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'radio-group-test-id';
const mockOnChange = jest.fn();

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: 'mockTextId',
    options: [
      {
        id: 'option1',
        value: 'option1',
        label: 'Opção 1',
      },
      {
        id: 'option2',
        value: 'option2',
        label: 'Opção 2',
      },
      {
        id: 'option3',
        value: 'option3',
        label: 'Opção 3',
      },
    ],
    defaultValue: 'option1',
    name: 'radio-group-test',
    onChange: mockOnChange,
    disabled: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('RadioGroup | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('RadioGroup | Event Click', async () => {
      await userEvent.click(canvas.getByTestId('option1'));
      expect(mockOnChange).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {},
};

export default meta;
