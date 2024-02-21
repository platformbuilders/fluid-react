import { faker } from '@faker-js/faker';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import FormError from './index';

//  Mocks
const mockErrorWords = faker.random.words(10);
const mockWords = faker.random.words(10);

const meta: Meta<typeof FormError> = {
  title: 'Components/FormError',
  component: FormError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      description: 'Error message to be displayed',
      type: 'string',
      control: { type: 'text' },
    },
    children: {
      description: 'Children to be displayed',
      type: 'string',
      control: { type: 'text' },
    },
  },
  args: {
    children: mockWords,
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('FormError | Test Render', async () => {
      expect(canvas.getByText(mockWords)).toBeInTheDocument();
    });
  },
};

type Story = StoryObj<typeof FormError>;

export const Error: Story = {
  args: {
    error: mockErrorWords,
  },
};

export default meta;
