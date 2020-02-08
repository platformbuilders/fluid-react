import React, { FC, useContext } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../ThemeContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DismissKeyboardView: FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {children}
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};

export default DismissKeyboardView;
