/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';
import Radio from '.';
import { Props } from './index';

const defaultContent = 'Text';
const defaultProps: Props = {
  label: defaultContent,
  onChange: vi.fn(),
  group: 'group1',
  id: 'id1',
};

describe('Component: Radio', () => {
  test('should have container in the document', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Radio {...defaultProps} />
      </ThemeProvider>,
    );
    expect(container).toBeInTheDocument();
  });
});
