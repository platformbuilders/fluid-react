import { FC } from 'react';
import { TextInputType } from '../../../types';

import { Input, Message, PlaceholderLabel } from '../styles';

const TextInputMask: FC<
  Partial<
    TextInputType & {
      maxLength: number;
      hasValue: boolean;
      hasMessage: boolean;
    }
  >
> = ({
  mask,
  maskType = '',
  onChange,
  onBlur,
  onFocus,
  error,
  style = {},
  hasValue = false,
  hasMessage = false,
  label,
  ...rest
}) => (
  <>
    <Input {...rest} style={style} />
    <PlaceholderLabel $hasValue={hasValue}>{label}</PlaceholderLabel>
    {hasMessage ? <Message>{error}</Message> : null}
  </>
);

export default TextInputMask;
