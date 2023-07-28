/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Checkbox, { CheckboxProps } from '.';

const defaultProps: CheckboxProps = {
  checked: false,
  onChange: vi.fn(),
  label: 'Text',
  name: 'Text',
};

describe('Component: Checkbox', () => {
  test('should have container in the document', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Checkbox {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toBeInTheDocument();
  });
});
