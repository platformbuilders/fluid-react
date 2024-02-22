import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import Avatar from './index';

configure({
  testIdAttribute: 'id',
});

//  Mocks
const eventMockFn = jest.fn();
const testId = 'avatar-id';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    src: 'https://thispersondoesnotexist.com/',
    onPress: eventMockFn,
    id: testId,
    style: { width: '150px', height: '150px', objectFit: 'cover' },
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Avatar - Normal | Test Render', async () => {
      expect(canvas.getByTestId(testId)).toBeInTheDocument();
    });

    await step('Avatar - Normal | Check Event Click', async () => {
      await userEvent.click(canvas.getByTestId(testId));

      expect(eventMockFn).toHaveBeenCalled();
    });
  },
};

type Story = StoryObj<typeof Avatar>;

export const Rounded: Story = {
  args: {
    variant: 'rounded',
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    variant: 'square',
  },
};

export default meta;
