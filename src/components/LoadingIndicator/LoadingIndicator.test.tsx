/// <reference types="vitest/globals" />
/// <reference types="vitest-dom/extend-expect" />
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../theme';
import LoadingIndicator from '.';

vi.mock('lottie-web', () => ({ default: { loadAnimation: vi.fn() } }));

describe('<LoadingIndicator />', () => {
  it('should have container in the document', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator />
      </ThemeProvider>,
    );

    expect(container).toBeInTheDocument();
  });
});
