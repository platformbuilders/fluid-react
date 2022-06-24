import { FC } from 'react';
import { FormError } from '..';
import { TextInputType } from '../../types';
import CurrencyInput from './CurrencyInput';
import { Input, InputWrapper } from './styles';
import TextInputMask from './TextInputMask';

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
  const hasMask = mask || maskType;

  const renderTextInput = () => {
    if (maskType === 'currency') {
      return (
        <CurrencyInput
          {...rest}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          variant={variant}
        />
      );
    }

    if (hasMask) {
      return (
        <TextInputMask
          mask={mask}
          maskType={maskType}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxlength ? parseInt(maxlength, 10) : 0}
          variant={variant}
          inputProps={inputProps}
          {...rest}
        />
      );
    }

    return (
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
