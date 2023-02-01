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
  variant = 'standard',
  style,
  textInputStyle,
  className,
  classNameWrapper,
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
          className={className}
          classNameWrapper={classNameWrapper}
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
        style={textInputStyle}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className}
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
