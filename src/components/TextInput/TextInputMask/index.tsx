import React, { FC, useContext } from 'react';
import { MaskedInput } from '../types';
import { TextInput } from './styles';
import { ThemeContext } from '../../ThemeContext';
import { ThemeProvider } from 'styled-components';

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
