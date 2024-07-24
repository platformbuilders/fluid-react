import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import Icons from '../Icons';
import {
  Fieldset,
  IconWrapperLeft,
  IconWrapperRight,
  Input,
  InputWrapper,
  Label,
  Message,
  PlaceholderLabel,
  StyledIMaskInput,
  Wrapper,
} from './styles';

type IconsType = keyof typeof Icons;
type VariantProps = { variant?: 'default' | 'outlined' };

export type TextInputType = InputHTMLAttributes<HTMLInputElement> &
  VariantProps & {
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
  variant = 'default',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value?.length > 0;
  const hasError = error ? error.length > 0 : false;
  const hasFocus = isFocused || hasValue;

  const RightIconComponent: any = iconRight && Icons[iconRight];
  const LeftIconComponent: any = iconLeft && Icons[iconLeft];
  const ErrorIconComponent: any = Icons['ExclamationTriangleIcon'];

  const onAccept = (value: any) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value,
        },
      } as any);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  };

  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <Wrapper style={style}>
      {variant === 'outlined' && (
        <Label
          htmlFor={id}
          $hasFocus={hasFocus}
          $hasError={hasError}
          $hasIconLeft={!!iconLeft}
          $hasIconRight={!!iconRight}
        >
          {label}
        </Label>
      )}

      <InputWrapper
        $hasFocus={hasFocus}
        $hasError={hasError}
        $variant={variant}
      >
        {iconLeft && (
          <IconWrapperLeft
            $clickable={!!onClickIconLeft}
            $hasError={hasError}
            onClick={onClickIconLeft}
          >
            <LeftIconComponent
              id={`${id}-left-icon`}
              accessibility="ícone do botão"
            />
          </IconWrapperLeft>
        )}

        {maskOptions ? (
          <StyledIMaskInput
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
            onFocus={(event) => {
              handleFocus();
              onFocus?.(event);
            }}
            onBlur={(event) => {
              handleBlur(event);
              onBlur?.(event);
            }}
            mask={hasFocus ? maskOptions?.mask : ''}
            defaultValue={value}
            $hasIconLeft={!!iconLeft}
            $hasIconRight={!!iconRight}
            $hasError={hasError}
            $variant={variant}
            {...rest}
          />
        ) : (
          <Input
            id={id}
            data-testid={id}
            name={name}
            value={value}
            style={textInputStyle}
            onFocus={(event) => {
              handleFocus();
              onFocus?.(event);
            }}
            onBlur={(event) => {
              handleBlur(event);
              onBlur?.(event);
            }}
            onChange={onChange}
            maxLength={maxLength}
            autoFocus={autoFocus}
            $hasError={hasError}
            $hasIconLeft={!!iconLeft}
            $hasIconRight={!!iconRight}
            $variant={variant}
            {...rest}
          />
        )}

        {iconRight && (
          <IconWrapperRight
            $clickable={!!onClickIconRight}
            $hasError={hasError}
            onClick={onClickIconRight}
          >
            <RightIconComponent
              id={`${id}-right-icon`}
              accessibility="ícone do botão"
            />
          </IconWrapperRight>
        )}

        {variant === 'outlined' && (
          <Fieldset $hasFocus={hasFocus} $hasError={hasError}>
            <legend>
              <span>{label}</span>
            </legend>
          </Fieldset>
        )}
      </InputWrapper>

      {variant !== 'outlined' && (
        <PlaceholderLabel
          className="text-input-label"
          $hasIconLeft={!!iconLeft}
          $hasIconRight={!!iconRight}
          $hasError={hasError}
          $hasValue={hasValue}
        >
          {label}
        </PlaceholderLabel>
      )}

      {error || message ? (
        <Message
          className="error-text-input"
          $hasError={hasError}
          $variant={variant}
        >
          {variant === 'outlined' && <ErrorIconComponent />}
          {error || message}
        </Message>
      ) : null}
    </Wrapper>
  );
};

export default TextInput;
