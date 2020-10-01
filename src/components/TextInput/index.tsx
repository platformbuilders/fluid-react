import React, { FC } from 'react';
import TextInputMask from 'react-input-mask';
import { Input, InputWrapper } from './styles';
import { FormError } from '..';

enum Mask {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}

type Props = {
  mask?: string;
  maskType?: string;
  label?: string;
  error?: string | boolean;
  placeholder?: string;
  fullWidth?: boolean;
  name: string;
  id?: string;
  type: string;
  value: string | number | string[] | undefined;
  autoFocus?: boolean;
  onChange?: (value: any) => void;
  onBlur?: (e: any) => void;
};

const TextInput: FC<Props> = ({ mask, maskType = '', error = '', ...rest }) => {
  const renderTextInput = (): JSX.Element => {
    const hasMask = mask || maskType;
    const maskOption = Mask[maskType] || mask;

    return hasMask ? (
      <TextInputMask mask={maskOption} {...rest}>
        {(inputProps: any): JSX.Element => (
          <Input margin="normal" {...inputProps} />
        )}
      </TextInputMask>
    ) : (
      <Input margin="normal" error={!!error} {...rest} />
    );
  };
  return (
    <InputWrapper {...rest}>
      <FormError error={error}>{renderTextInput()}</FormError>
    </InputWrapper>
  );
};

export default TextInput;
