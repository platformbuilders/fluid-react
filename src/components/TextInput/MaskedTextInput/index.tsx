import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { MaskedTextInput as MaskedTextInputType } from '~/utils/types';
import { TextInput } from './styles';
import { ThemeContext } from '../../ThemeContext';

const MaskedTextInput: FC<MaskedTextInputType> = ({
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

export default MaskedTextInput;
