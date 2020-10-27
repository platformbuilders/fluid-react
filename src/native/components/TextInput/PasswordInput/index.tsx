import React, { useState, FC, useCallback } from 'react';
import { TextInputType } from '../../../types';
import TextInput from '../index';

const PasswordInput: FC<TextInputType> = (props) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
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
    <TextInput
      secureTextEntry={hidePassword}
      iconName={hidePassword ? 'eye' : 'eye-off'}
      iconTouchableEnabled
      onPressIcon={onPressShowPassword}
      iconHitSlop={hitSlop}
      {...props}
    />
  );
};

export default PasswordInput;
