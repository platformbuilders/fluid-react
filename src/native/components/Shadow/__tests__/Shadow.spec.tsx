import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Shadow from '..';
import { theme } from '../../../test/helpers';

describe('<Shadow />', () => {
  it('should render Shadow correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Shadow />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
