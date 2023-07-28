/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import theme from '../../theme';
import TextInput, { TextInputType } from './index';

const onChange = vi.fn();

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
    vi.restoreAllMocks();
    vi.clearAllMocks();
    vi.resetModules();
  });

  test('should change value of input without mask to 456', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextInput {...defaultProps} />
      </ThemeProvider>,
    );

    const inputElement: any = screen.getByTestId(inputId);

    fireEvent.change(inputElement, { target: { value: 456 } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should change value of input with mask to 123', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextInput {...defaultProps} maskOptions={{ mask: Number }} />
      </ThemeProvider>,
    );

    const inputElement: any = screen.getByTestId(inputId);

    fireEvent.change(inputElement, { target: { value: 123 } });

    expect(inputElement.value).toBe('123');
  });
});
