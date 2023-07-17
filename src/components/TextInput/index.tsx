import { FC } from 'react';
import { TextInputType } from '../../types';
import FormError from '../FormError';
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
  variant = 'standard',
  style,
  textInputStyle,
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
        />
      );
    }

    return (
      <Input
        {...rest}
        style={textInputStyle}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    );
  };

  return (
    <InputWrapper style={style}>
      <FormError error={error}>{renderTextInput()}</FormError>
    </InputWrapper>
  );
};

export default TextInput;
