import React, { FC } from 'react';
import { MaskedTextInputType } from '../../../types';
import { TextInput } from './styles';

const MaskedTextInput: FC<MaskedTextInputType> = ({
  maskType,
  inputRef,
  id,
  accessibility,
  contrast = false,
  multiline = false,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      id={id}
      accessibility={accessibility}
      testID={id}
      accessibilityLabel={accessibility}
      ref={inputRef}
      contrast={contrast}
      multiline={multiline}
      type={maskType}
      underlineColorAndroid="transparent"
    />
  );
};

export default MaskedTextInput;
