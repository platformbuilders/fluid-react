import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import TextInput from './index';

configure({ testIdAttribute: 'id' });

//  Mocks
const mockTextId = 'text-input-test-id';

const events = {
  onChange: jest.fn(),
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onClickIconLeft: jest.fn(),
};

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { control: { type: null } },
    onBlur: { control: { type: null } },
    onFocus: { control: { type: null } },
    onClickIconLeft: { control: { type: null } },
    onClickIconRight: { control: { type: null } },
    maskOptions: {
      control: { type: null },
      description: 'All Mask options in: https://imask.js.org',
    },
  },
  args: {
    id: mockTextId,
    placeholder: 'Name',
    message: 'Type your name',
    iconLeft: 'PersonIcon',
    ...events,
  },
  tags: ['autodocs'],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('TextInput | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('TextInput | Event Click', async () => {
      await userEvent.click(canvas.getByTestId(mockTextId));
      expect(events.onFocus).toHaveBeenCalled();
    });

    await step('TextInput | Change Value', async () => {
      await userEvent.type(canvas.getByTestId(mockTextId), 'Marcelo Silva');
      expect(events.onFocus).toHaveBeenCalled();
      expect(events.onChange).toHaveBeenCalled();
    });

    await step('TextInput | Event Blur', async () => {
      await userEvent.tab();
      expect(events.onBlur).toHaveBeenCalled();
    });

    await step('TextInput | Event Click Icon Left', async () => {
      await userEvent.click(canvas.getByTestId(`${mockTextId}-left-icon`));
      expect(events.onClickIconLeft).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {},
};

export const MaskPhone: Story = {
  args: {
    message: 'Type your Phone',
    maskOptions: {
      mask: '+{00} (00) 00000-0000',
    },
  },
};

export const MaskDate: Story = {
  args: {
    placeholder: 'Date',
    message: 'Type your Birthdate',
    maskOptions: {
      pattern: 'd/m/YYYY',
      mask: Date,
      min: new Date(1900, 0, 1),
      max: new Date(Date.now()),
    },
  },
};

export default meta;
