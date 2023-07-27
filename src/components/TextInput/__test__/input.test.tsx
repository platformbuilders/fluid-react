import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import theme from '../../../theme';
import { TextInputType } from '../../../types';
import TextInput from '../index';

const onChange = jest.fn();

const inputId = 'input-test';

const defaultProps: TextInputType = {
  id: inputId,
  value: '',
  label: 'label',
  name: 'inputTest',
  onChange,
};

describe('Component: TextInput', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
    jest.resetModules();
  });

  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <TextInput {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should change value of input without mask to 456', () => {
    render(<TextInput {...defaultProps} />);

    const inputElement: any = screen.getByTestId(inputId);

    fireEvent.change(inputElement, { target: { value: 456 } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should change value of input with mask to 123', () => {
    render(<TextInput {...defaultProps} maskOptions={{ mask: Number }} />);

    const inputElement: any = screen.getByTestId(inputId);

    fireEvent.change(inputElement, { target: { value: 123 } });

    expect(inputElement.value).toBe('123');
  });
});
