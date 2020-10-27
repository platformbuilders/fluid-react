import 'jest';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import Button from '..';
import { theme } from '../../../test/helpers';

describe('<Button />', () => {
  it('should render button', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button when rounded', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" rounded />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with loading', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" loading />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Button', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });
});
