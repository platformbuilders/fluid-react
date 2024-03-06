import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { configure, userEvent, within } from '@storybook/testing-library';
import DatePicker from './index';

configure({
  testIdAttribute: 'testid',
});

//  Mocks
const onChange = jest.fn();
const calendarTestID = 'calendar-test-id';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: { type: null } },
    disableMonthPicker: { control: { type: 'boolean' } },
    disableYearPicker: { control: { type: 'boolean' } },
    workDays: { control: { type: 'boolean' } },
    minDate: { control: { type: 'boolean' } },
    maxDate: { control: { type: 'boolean' } },
  },
  args: {
    onChange: onChange,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};
