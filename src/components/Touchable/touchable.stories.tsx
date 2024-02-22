import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';

import Touchable from './index';

configure({ testIdAttribute: 'testid' });

//  Mocks
const mockTextId = 'touchable-test-id';
const mockDisabledTextId = 'touchable-disabled-test-id';
const mockOnPress = jest.fn();

const meta: Meta<typeof Touchable> = {
  title: 'Components/Touchable',
  component: Touchable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    testID: mockTextId,
    children: 'Touchable Test',
    onPress: mockOnPress,
    disabled: false,
  },
};

type Story = StoryObj<typeof Touchable>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Touchable | Test Render', async () => {
      expect(canvas.getByTestId(mockTextId)).toBeInTheDocument();
    });

    await step('Touchable | Event Click', async () => {
      expect(canvas.getByTestId(mockTextId)).not.toHaveAttribute('disabled');
      await userEvent.click(canvas.getByTestId(mockTextId));
      expect(mockOnPress).toHaveBeenCalled();
    });
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    testID: mockDisabledTextId,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Touchable | Test Render', async () => {
      expect(canvas.getByTestId(mockDisabledTextId)).toBeInTheDocument();
    });

    await step('Touchable | Event Click', async () => {
      await userEvent.click(canvas.getByTestId(mockDisabledTextId));
      expect(canvas.getByTestId(mockDisabledTextId)).toHaveAttribute(
        'disabled',
      );
    });
  },
};

export default meta;
