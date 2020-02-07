import React, { FC } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DismissKeyboardView: FC<Props> = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
