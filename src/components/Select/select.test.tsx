/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Select from './index';

const defaultProps = {
  id: 'gender',
  selectedValue: 'Male',
  onValueChange: vi.fn(),
  options: [
    {
      value: 'Male',
      option: 'Male',
    },
    {
      value: 'Female',
      option: 'Female',
    },
  ],
};

describe('Component: Select', () => {
  test('should have container in the document', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Select {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toBeInTheDocument();
  });
});
