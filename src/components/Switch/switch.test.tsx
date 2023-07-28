/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Switch, { Props } from './index';

const defaultProps: Props = {
  id: 'switch-test',
  label: 'test',
  onChange: vi.fn(),
  checked: true,
};

describe('Component: Switch', () => {
  test('should have container in the document', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Switch {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toBeInTheDocument();
  });
});
