import { ChangeEvent, FC, RefObject, useRef } from 'react';
import { IMaskMixin } from 'react-imask';

import { TextInputType } from '../../types';
import { Input, Label, Message, PlaceholderLabel, Wrapper } from './styles';

const InputMask = IMaskMixin(({ inputRef, ...props }) => (
  <Input {...props} ref={inputRef as RefObject<HTMLInputElement> | undefined} />
));

const TextInput: FC<TextInputType> = ({
  message,
  onChange,
  onBlur,
  onFocus,
  style,
  label,
  textInputStyle,
  value,
  id,
  name,
  maxLength,
  autoFocus,
  maskOptions,
}) => {
  const hasValue = value?.length > 0;

  const onAccept = (_, __, event?: InputEvent | undefined) => {
    onChange(event as Partial<ChangeEvent<any>>);
  };

  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <Wrapper style={style}>
      <Label>
        {maskOptions ? (
          <InputMask
            {...maskOptions}
            id={id}
            name={name}
            data-testid={id}
            style={textInputStyle}
            ref={ref}
            inputRef={inputRef}
            onAccept={onAccept}
            autoFocus={autoFocus}
          />
        ) : (
          <Input
            id={id}
            data-testid={id}
            name={name}
            value={value}
            style={textInputStyle}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            maxLength={maxLength}
            autoFocus={autoFocus}
          />
        )}
        <PlaceholderLabel $hasValue={hasValue}>{label}</PlaceholderLabel>
        {message ? <Message>{message}</Message> : null}
      </Label>
    </Wrapper>
  );
};

export default TextInput;
