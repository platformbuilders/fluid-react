import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { MaskedInput } from '../types';
import { TextInput } from './styles';
import { ThemeContext } from '../../ThemeContext';

const TextInputMask: FC<MaskedInput> = ({
  maskType,
  dark = false,
  multiline = false,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <TextInput
        {...props}
        dark={dark}
        multiline={multiline}
        type={maskType}
        underlineColorAndroid="transparent"
      />
    </ThemeProvider>
  );
};

export default TextInputMask;
