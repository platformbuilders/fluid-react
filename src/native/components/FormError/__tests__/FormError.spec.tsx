import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import FormError from '..';
import { theme } from '../../../test/helpers';

describe('<FormError />', () => {
  it('should render the form error component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <FormError id="" accessibility="" error="testing error" large />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
