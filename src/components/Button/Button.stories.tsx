import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import Button from './index';

configure({
  testIdAttribute: 'testid',
});

//  Mocks
const normalBtnFn = jest.fn();
const btnNormalID = 'button-normal-id';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Botão de Teste',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: {
    children: 'Botão de Teste',
    size: 'normal',
    testID: btnNormalID,
    onPress: normalBtnFn,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Button - Normal | Test Render', async () => {
      expect(canvas.getByTestId(btnNormalID)).toBeInTheDocument();
      expect(normalBtnFn).not.toHaveBeenCalled();
    });

    await step('Button - Normal | Check Event Click', async () => {
      await userEvent.click(canvas.getByTestId(btnNormalID));

      expect(normalBtnFn).toHaveBeenCalled();
    });
  },
};

export const Medium: Story = {
  args: {
    ...Normal.args,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Normal.args,
    size: 'large',
  },
};
