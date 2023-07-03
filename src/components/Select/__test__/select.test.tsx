import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import { theme } from '../../../config/helpers';
import Select, { SelectProps as Props } from '../index';

const defaultProps: Props = {
  label: 'Gender',
  selectedValue: 'Male',
  onChange: jest.fn(),
  values: [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ],
};

describe('Component: Select', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Select {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should change value to female', () => {
    // should
    const handleChange = jest.fn();

    // when
    const { getByRole } = render(
      <Select id="select-test" {...defaultProps} onChange={handleChange} />,
    );
    fireEvent.change(getByRole('textbox', { hidden: true }), {
      target: { value: 'Female' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
