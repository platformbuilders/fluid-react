import { FC } from 'react';
import ReactInputMask, { Props } from 'react-input-mask';
import { TextInputType } from '../../../types';

import { Input, Message, PlaceholderLabel } from '../styles';

enum Mask {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}

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
  <ReactInputMask
    mask={(Mask[maskType as keyof typeof Mask] || mask) as Props['mask']}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    {...rest}
  >
    <>
      <Input style={style} />
      <PlaceholderLabel $hasValue={hasValue}>{label}</PlaceholderLabel>
      {hasMessage ? <Message>{error}</Message> : null}
    </>
  </ReactInputMask>
);

export default TextInputMask;
