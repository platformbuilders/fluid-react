import { FC } from 'react';
import { FormError } from '..';
import { TextInputType } from '../../types';
import CurrencyInput from './CurrencyInput';
import { Input, InputWrapper } from './styles';
import TextInputMask from './TextInputMask';

const TextInput: FC<TextInputType> = ({
  className,
  error = '',
  inputProps,
  mask,
  maskType = '',
  onBlur,
  onChange,
  onFocus,
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
          {...rest}
          mask={mask}
          maskType={maskType}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          error={!!error}
          variant={variant}
          inputProps={inputProps}
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
        inputProps={inputProps}
        variant={variant}
      />
    );
  };

  return (
    <InputWrapper className={className} {...rest}>
      <FormError error={error}>{renderTextInput()}</FormError>
    </InputWrapper>
  );
};

export default TextInput;
