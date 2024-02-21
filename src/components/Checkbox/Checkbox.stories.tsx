import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, within } from '@storybook/testing-library';
import Checkbox from './index';
configure({
  testIdAttribute: 'id',
});

//  Mocks
const eventMockFn = jest.fn();

const testId = 'checkbox-id';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: eventMockFn,
    id: testId,
    label: 'Enable Settings',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Checkbox - Normal | Test Render', async () => {
      expect(canvas.getByTestId(testId)).toBeInTheDocument();
      expect(canvas.getByTestId(testId)).not.toBeChecked();
    });
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Normal: Story = {};
