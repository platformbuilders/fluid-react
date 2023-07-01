import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import LoadingIndicator from '..';
import theme from '../../../theme';

describe('<LoadingIndicator />', () => {
  it('should render LoadingIndicator correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render LoadingIndicator with large', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator large />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render LoadingIndicator with contrast', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator contrast />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render LoadingIndicator with variant', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator variant="linear" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render LoadingIndicator with accessibility', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator accessibility="" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
