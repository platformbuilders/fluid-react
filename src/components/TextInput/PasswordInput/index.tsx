import React, { useState, FC, useCallback, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { TextInput as TextInputType } from '../../../utils/types';
import TextInput from '../index';
import { ThemeContext } from '../../ThemeContext';

const PasswordInput: FC<TextInputType> = (props) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const { theme } = useContext(ThemeContext);
  const hitSlop = {
    left: 40,
    right: 40,
    top: 40,
    bottom: 40,
  };

  const onPressShowPassword = useCallback((): void => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  return (
    <ThemeProvider theme={theme}>
      <TextInput
        secureTextEntry={hidePassword}
        iconName={hidePassword ? 'eye' : 'eye-off'}
        iconTouchableEnabled
        onPressIcon={onPressShowPassword}
        iconHitSlop={hitSlop}
        {...props}
      />
    </ThemeProvider>
  );
};

export default PasswordInput;
