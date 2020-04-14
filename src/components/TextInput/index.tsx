import React, { FC } from 'react';
import TextInputMask from 'react-input-mask';
import { Input, InputWrapper } from './styles';
import { FormError } from '..';

enum maskTypes {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}
interface Props {
  mask?: string;
  maskType?: string;
  label?: string;
  error: string;
  placeholder?: string;
  fullWidth?: boolean;
  name: string;
  id?: string;
  type: string;
  value: string;
  autoFocus?: boolean;
  onChange(value: any): void;
}

const TextInput: FC<Props> = ({ mask, maskType, error, ...rest }) => {
  const renderTextInput = (): JSX.Element => {
    return mask || maskType ? (
      <TextInputMask mask={maskTypes[`${maskType}`] || mask} {...rest}>
        {(inputProps: any): JSX.Element => (
          <Input margin="normal" {...inputProps} />
        )}
      </TextInputMask>
    ) : (
      <Input margin="normal" {...rest} error={!!error} />
    );
  };
  return (
    <InputWrapper {...rest}>
      <FormError error={error}>{renderTextInput()}</FormError>
    </InputWrapper>
  );
};
export default TextInput;
