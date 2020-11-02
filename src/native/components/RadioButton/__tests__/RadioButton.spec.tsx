import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import RadioButton from '..';
import { theme } from '../../../test/helpers';

describe('<RadioButton />', () => {
  it('should render radio button component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="Select information"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioButton
          id="testing_radio_btn"
          accessibility="checkbox"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing_radio_btn');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });
});
