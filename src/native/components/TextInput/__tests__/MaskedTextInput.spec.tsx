import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import MaskedTextInput from '../MaskedTextInput';
import { theme } from '../../../test/helpers';

describe('<MaskedTextInput />', () => {
  it('should render textinput', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          variant="headline"
          accessibility=""
          maskType="cpf"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
