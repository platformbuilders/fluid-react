import { FC } from 'react';
import { TextInputType } from '../../types';
import CurrencyInput from './CurrencyInput';
import { Input, Label, Message, PlaceholderLabel, Wrapper } from './styles';
import TextInputMask from './TextInputMask';

const TextInput: FC<TextInputType> = ({
  mask,
  maskType,
  error = '',
  onChange,
  onBlur,
  onFocus,
  variant = 'standard',
  style,
  label,
  textInputStyle,
  value,
  ...rest
}) => {
  const hasValue = typeof value === 'string' && value?.length > 0;
  const hasMessage = typeof error === 'string' && error.length > 0;
  const isCurrency = maskType === 'currency';

  return (
    <Wrapper style={style}>
      <Label>
        {isCurrency ? (
          <>
            <CurrencyInput
              {...rest}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              variant={variant}
            />
            <PlaceholderLabel $hasValue={hasValue || isCurrency}>
              {label}
            </PlaceholderLabel>
            {hasMessage ? <Message>{error}</Message> : null}
          </>
        ) : mask || maskType ? (
          <TextInputMask
            {...rest}
            mask={mask}
            maskType={maskType}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            error={!!error}
            label={label}
            hasValue={hasValue}
            hasMessage={hasMessage}
          />
        ) : (
          <>
            <Input
              {...rest}
              style={textInputStyle}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <PlaceholderLabel $hasValue={hasValue || isCurrency}>
              {label}
            </PlaceholderLabel>
            {hasMessage ? <Message>{error}</Message> : null}
          </>
        )}
      </Label>
    </Wrapper>
  );
};

export default TextInput;
