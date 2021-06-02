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
      rightIcon
      rightIconName={hidePassword ? 'eye' : 'eye-off'}
      onRightIconPress={onPressShowPassword}
      iconTouchableEnabled
      iconHitSlop={hitSlop}
      {...props}
    />
  );
};

export default PasswordInput;
