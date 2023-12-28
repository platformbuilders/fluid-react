import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  MouseEvent,
  Ref,
  RefObject,
  useRef,
} from 'react';
import { IMaskMixin, ReactElementProps } from 'react-imask';
import Icons from '../Icons';
import {
  IconWrapperLeft,
  IconWrapperRight,
  Input,
  Message,
  PlaceholderLabel,
  Wrapper,
} from './styles';

type IconsType = keyof typeof Icons;

type InputMaskProps = ReactElementProps<any> & {
  inputRef: Ref<any>;
  hasError?: boolean;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
};

const InputMask = IMaskMixin(
  ({
    inputRef,
    hasError,
    hasIconRight,
    hasIconLeft,
    ...props
  }: InputMaskProps) => (
    <Input
      {...props}
      $hasError={!!hasError}
      hasIconLeft={!!hasIconLeft}
      hasIconRight={!!hasIconRight}
      ref={inputRef as RefObject<HTMLInputElement> | undefined}
    />
  ),
);

export type TextInputType = InputHTMLAttributes<HTMLInputElement> & {
  style?: any;
  textInputStyle?: any;
  maskOptions?: any;
  label?: string;
  message?: string;
  error?: string;
  name: string;
  id: string;
  maxLength?: number;
  value: string;
  autoFocus?: boolean;
  iconRight?: IconsType;
  iconLeft?: IconsType;
  onClickIconRight?: (event: MouseEvent<HTMLElement>) => void;
  onClickIconLeft?: (event: MouseEvent<HTMLElement>) => void;
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
  onClickIconLeft,
  onClickIconRight,
  style,
  label,
  textInputStyle,
  value,
  id,
  name,
  maxLength,
  autoFocus,
  maskOptions,
  iconRight,
  iconLeft,
  ...rest
}) => {
  const hasValue = value?.length > 0;
  const hasError = error ? error.length > 0 : false;

  const RightIconComponent: any = iconRight && Icons[iconRight];
  const LeftIconComponent: any = iconLeft && Icons[iconLeft];

  const onAccept = (_, __, event?: InputEvent | undefined) => {
    onChange(event as Partial<ChangeEvent<any>>);
  };

  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <Wrapper style={style}>
      {iconLeft && (
        <IconWrapperLeft
          clickable={!!onClickIconLeft}
          onClick={onClickIconLeft}
        >
          <LeftIconComponent accessibility="ícone do botão" />
        </IconWrapperLeft>
      )}
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
          hasIconLeft={!!iconLeft}
          hasIconRight={!!iconRight}
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
          hasIconLeft={!!iconLeft}
          hasIconRight={!!iconRight}
          {...rest}
        />
      )}
      {iconRight && (
        <IconWrapperRight
          clickable={!!onClickIconRight}
          onClick={onClickIconRight}
        >
          <RightIconComponent accessibility="ícone do botão" />
        </IconWrapperRight>
      )}
      <PlaceholderLabel
        className="text-input-label"
        hasIconLeft={!!iconLeft}
        hasIconRight={!!iconRight}
        $hasError={hasError}
        $hasValue={hasValue}
      >
        {label}
      </PlaceholderLabel>
      {error || message ? (
        <Message className="error-text-input" $hasError={hasError}>
          {error || message}
        </Message>
      ) : null}
    </Wrapper>
  );
};

export default TextInput;
