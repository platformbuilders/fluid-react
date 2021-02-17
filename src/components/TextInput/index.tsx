import React, { FC } from 'react';
import TextInputMask from 'react-input-mask';
import CurrencyInput from './CurrencyInput';
import { Input, InputWrapper } from './styles';
import { TextInputType } from '../../types';
import { FormError } from '..';

enum Mask {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}

const TextInput: FC<TextInputType> = ({
  mask,
  maskType = '',
  formatChars,
  error = '',
  onChange,
  onBlur,
  onFocus,
  maxlength,
  ...rest
}) => {
  const renderTextInput = (): JSX.Element => {
    const hasMask = mask || maskType;
    const maskOption = Mask[maskType] || mask;

    return maskType === 'currency' ? (
      <CurrencyInput {...rest} onChangeText={onChange} />
    ) : hasMask ? (
      <TextInputMask
        mask={maskOption}
        formatChars={formatChars}
        onChange={onChange}
        onFocus={onFocus}
        {...rest}
      >
        {(inputProps: any): JSX.Element => (
          <Input
            margin="normal"
            {...inputProps}
            inputProps={{ maxLength: maxlength }}
          />
        )}
      </TextInputMask>
    ) : (
      <Input
        {...rest}
        margin="normal"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        error={!!error}
        inputProps={{ maxLength: maxlength }}
      />
    );
  };
  return (
    <InputWrapper {...rest}>
      <FormError error={error}>{renderTextInput()}</FormError>
    </InputWrapper>
  );
};

export default TextInput;
