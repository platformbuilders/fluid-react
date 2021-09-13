import React, { FC } from 'react';
import TextInputMask from 'react-input-mask';
import { FormError } from '..';
import { TextInputType } from '../../types';
import CurrencyInput from './CurrencyInput';
import { Input, InputWrapper } from './styles';

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
  error = '',
  onChange,
  onBlur,
  onFocus,
  inputProps,
  maxlength,
  variant = 'standard',
  ...rest
}) => {
  const renderTextInput = (): JSX.Element => {
    const hasMask = mask || maskType;
    const maskOption = Mask[maskType] || mask;

    return maskType === 'currency' ? (
      <CurrencyInput
        {...rest}
        onChangeText={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        variant={variant}
      />
    ) : hasMask ? (
      <TextInputMask
        mask={maskOption}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...rest}
      >
        {(inputProps: any): JSX.Element => (
          <Input
            margin="normal"
            {...inputProps}
            inputProps={{ maxLength: maxlength, ...inputProps }}
            variant={variant}
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
        inputProps={{ maxLength: maxlength, ...inputProps }}
        variant={variant}
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
