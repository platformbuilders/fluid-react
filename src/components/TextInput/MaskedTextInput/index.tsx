import React, { FC } from 'react';
import { MaskedTextInput as MaskedTextInputType } from '../../../utils/types';
import { TextInput } from './styles';

const MaskedTextInput: FC<MaskedTextInputType> = ({
  maskType,
  inputRef,
  contrast = false,
  multiline = false,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      ref={inputRef}
      contrast={contrast}
      multiline={multiline}
      type={maskType}
      underlineColorAndroid="transparent"
    />
  );
};

export default MaskedTextInput;
