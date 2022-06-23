import { VFC } from 'react';
import ReactInputMask from 'react-input-mask';

import { TextInputType } from '../../../types';

import { Input } from '../styles';

enum Mask {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}

const TextInputMask: VFC<Partial<TextInputType & { maxLength: number }>> = ({
  mask,
  maskType = '',
  onChange,
  onBlur,
  onFocus,
  inputProps,
  maxLength,
  variant = 'standard',
  ...rest
}) => {
  const maskOption = Mask[maskType] || mask;

  return (
    <ReactInputMask
      mask={maskOption}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...rest}
    >
      {(inputMaskProps: any): JSX.Element => (
        <Input
          margin="normal"
          {...inputMaskProps}
          inputProps={{ maxLength, ...inputProps }}
          variant={variant}
        />
      )}
    </ReactInputMask>
  );
};

export default TextInputMask;
