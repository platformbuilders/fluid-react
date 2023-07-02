import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import LoadingIndicator from '..';
import theme from '../../../theme';

describe('<LoadingIndicator />', () => {
  it('should render LoadingIndicator correctly', () => {
    const render = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator />
      </ThemeProvider>,
    );

    expect(render).toMatchSnapshot();
  });

  it('should render LoadingIndicator with large', () => {
    const render = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator large />
      </ThemeProvider>,
    );

    expect(render).toMatchSnapshot();
  });

  it('should render LoadingIndicator with contrast', () => {
    const render = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator contrast />
      </ThemeProvider>,
    );

    expect(render).toMatchSnapshot();
  });

  it('should render LoadingIndicator with variant', () => {
    const render = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator variant="linear" />
      </ThemeProvider>,
    );

    expect(render).toMatchSnapshot();
  });

  it('should render LoadingIndicator with accessibility', () => {
    const render = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator accessibility="" />
      </ThemeProvider>,
    );

    expect(render).toMatchSnapshot();
  });
});
