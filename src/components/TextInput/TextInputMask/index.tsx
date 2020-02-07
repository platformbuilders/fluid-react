import React, { FC } from 'react';
import { MaskedInput } from '../types';
import { TextInput } from './styles';

const TextInputMask: FC<MaskedInput> = ({
  maskType,
  dark = false,
  multiline = false,
  ...props
}) => (
  <TextInput
    {...props}
    dark={dark}
    multiline={multiline}
    type={maskType}
    underlineColorAndroid="transparent"
  />
);

export default TextInputMask;
