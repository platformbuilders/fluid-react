import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  Ref,
  RefObject,
  useRef,
} from 'react';
import { IMaskMixin, ReactElementProps } from 'react-imask';

import { Input, Label, Message, PlaceholderLabel, Wrapper } from './styles';

type InputMaskProps = ReactElementProps<any> & {
  inputRef: Ref<any>;
  hasError?: boolean;
};

const InputMask = IMaskMixin(
  ({ inputRef, hasError, ...props }: InputMaskProps) => (
    <Input
      {...props}
      $hasError={!!hasError}
      ref={inputRef as RefObject<HTMLInputElement> | undefined}
    />
  ),
);

export type TextInputType = InputHTMLAttributes<HTMLInputElement> & {
  style?: any;
  textInputStyle?: any;
  maskOptions?: any;
  label: string;
  message?: string;
  error?: string;
  name: string;
  id: string;
  maxLength?: number;
  value: string;
  autoFocus?: boolean;
  onChange: (e: Partial<ChangeEvent<any>>) => void;
  onBlur?: (
    e:
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLDivElement>,
  ) => void;
  onFocus?:
    | ((
        e:
          | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          | ChangeEvent<HTMLDivElement>,
      ) => void)
    | undefined;
};

const TextInput: FC<TextInputType> = ({
  message,
  error,
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
  ...rest
}) => {
  const hasValue = value?.length > 0;
  const hasError = error ? error.length > 0 : false;

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
            hasError={hasError}
            {...rest}
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
            $hasError={hasError}
            {...rest}
          />
        )}
        <PlaceholderLabel $hasError={hasError} $hasValue={hasValue}>
          {label}
        </PlaceholderLabel>
        {error || message ? (
          <Message $hasError={hasError}>{error || message}</Message>
        ) : null}
      </Label>
    </Wrapper>
  );
};

export default TextInput;
