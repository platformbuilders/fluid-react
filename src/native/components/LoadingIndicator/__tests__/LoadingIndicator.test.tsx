import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import LoadingIndicator from '..';
import { theme } from '../../../test/helpers';

describe('<LoadingIndicator />', () => {
  it('should render LoadingIndicator correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <LoadingIndicator />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
