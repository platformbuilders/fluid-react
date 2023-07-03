import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import theme from '../../../theme';
import { TextInputType } from '../../../types';
import CurrencyInput from '../CurrencyInput';
import TextInput from '../index';
import TextInputMask from '../TextInputMask';

const defaultProps: TextInputType = {
  id: 'input-test',
  type: 'text',
  value: '',
  label: 'Input',
  name: 'input',
  placeholder: 'Input',
  variant: 'filled',
};

describe('Component: TextInput', () => {
  test('snapshots with default props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <TextInput {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('should change value input to Input', () => {
    const handleChange = jest.fn();

    const { getByRole } = render(
      <TextInput {...defaultProps} onChange={handleChange} />,
    );
    fireEvent.change(getByRole('textbox'), { target: { value: 'Input' } });
    expect(handleChange).toHaveBeenCalled();
  });

  test('should change value with mask', () => {
    const { getByRole } = render(
      <TextInputMask {...defaultProps} maskType="cep" value="58071000" />,
    );

    fireEvent.change(getByRole('textbox'), { target: { value: '58071000' } });

    expect(getByRole('textbox')).toHaveValue('58071-000');
  });
  test('should change value with currency', () => {
    const { getByRole } = render(
      <CurrencyInput {...defaultProps} value="1200" />,
    );

    expect(getByRole('textbox')).toHaveValue('R$ 1.200');
  });
});
