import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Icon from '..';
import { theme } from '../../../test/helpers';

describe('<Icon />', () => {
  it('should render icon component correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon name="access-point" id="testing" accessibility="testing_icon" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
