import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DisplayVersion from '..';
import { theme } from '../../../test/helpers';

describe('<DisplayVersion />', () => {
  it('should render and match snapshot for default props', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <DisplayVersion appVersion="1.0" buildVersion="1" />
      </ThemeProvider>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
