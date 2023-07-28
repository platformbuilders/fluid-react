/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';

import Avatar, { Props } from '.';

const defaultProps: Props = {
  src: 'some_url',
  alt: 'some image',
  onPress: vi.fn(),
};

describe('Component: Avatar', () => {
  test('should render the container', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar {...defaultProps} />
      </ThemeProvider>,
    );

    expect(container).toBeInTheDocument();
  });
});
