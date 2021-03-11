import React, { FC } from 'react';
import { MaskedTextInputType, InputStatus } from '../../../types';
import { TextInput } from './styles';

const MaskedTextInput: FC<MaskedTextInputType> = ({
  maskType,
  inputRef,
  id,
  accessibility,
  contrast = false,
  multiline = false,
  status = InputStatus.Default,
  ...props
}) => (
  <TextInput
    {...props}
    id={id || accessibility}
    status={status}
    accessibility={accessibility}
    testID={id || accessibility}
    accessibilityLabel={accessibility}
    ref={inputRef}
    contrast={contrast}
    multiline={multiline}
    type={maskType}
    underlineColorAndroid="transparent"
  />
);

export default MaskedTextInput;
