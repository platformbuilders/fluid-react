import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import Avatar from '..';
import { theme } from '../../../test/helpers';

describe('<Avatar />', () => {
  it('should render Avatar', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Avatar with camera', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" displayCamera />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Avatar id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });
});
