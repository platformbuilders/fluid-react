import 'jest';
import React, { useState, FC } from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import TextInput from '..';
import { theme } from '../../../test/helpers';

describe('<TextInput />', () => {
  it('should render textinput', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <TextInput id="test" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render input and trigger state change, blur, focus and onPressIcon', () => {
    const onBlurFN = jest.fn();
    const onFocusFN = jest.fn();
    const Component: FC = (): JSX.Element => {
      const [value, setValue] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <TextInput
            id="testing_textInput"
            accessibility=""
            value={value}
            onChangeText={setValue}
            onBlur={onBlurFN}
            onFocus={onFocusFN}
            iconName="access-point"
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);

    const component = getByTestId('testing_textInput');

    fireEvent.changeText(component, 'Value changed');
    fireEvent(component, 'blur');
    fireEvent(component, 'focus');

    expect(onBlurFN).toHaveBeenCalled();
    expect(onFocusFN).toHaveBeenCalled();
    expect(component.props.value).toBe('Value changed');
  });
});
