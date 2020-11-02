import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import PinInput from '..';
import { defaultStyling } from '../styles';
import { theme } from '../../../test/helpers';

describe('<PinInput />', () => {
  it('should render textinput', () => {
    const onChangeText = jest.fn();
    const defaultStyle = defaultStyling(theme);
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <PinInput
          id="test"
          accessibility=""
          onChangeText={onChangeText}
          {...defaultStyle}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
