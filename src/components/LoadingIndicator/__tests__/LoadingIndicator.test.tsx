import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import LoadingIndicator from '..';
import theme from '../../../theme';

describe('<LoadingIndicator />', () => {
  it('should render LoadingIndicator correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator with large', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator large />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator with contrast', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator contrast />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator large with variant', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator large variant="linear" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator large contrast with variant', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator large contrast variant="linear" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator with variant', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator variant="linear" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render LoadingIndicator with accessibility', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LoadingIndicator accessibility="testing" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
