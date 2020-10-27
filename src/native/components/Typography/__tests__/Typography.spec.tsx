import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Typography from '..';
import { theme } from '../../../test/helpers';

describe('<Typography />', () => {
  it('should render and match snapshot for default props', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant largeTitle', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="largeTitle" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant title1', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="title1" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant title2', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="title2" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant title3', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="title3" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant title4', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="title4" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant headline', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="headline" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant subhead', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="subhead" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant footnote', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="footnote" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant caption1', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="caption1" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render and match snapshot for variant caption2', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography variant="caption2" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
