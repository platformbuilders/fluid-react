import { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

const Button: FC<ButtonProps> = ({
  accessibility,
  accessibilityLabel,
  children,
  className,
  contrast = false,
  disabled = false,
  hasBorder = false,
  id,
  leftIconName,
  loading = false,
  onPress,
  rightIconName,
  rounded = false,
  testID,
  textStyle = {},
  typographyVariant = 'button',
  variant = 'primary',
  ...rest
}) => {
  return (
    <Touchable
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel || accessibility}
      className={className}
      disabled={loading || disabled}
      id={id || accessibility}
      onPress={onPress}
      rounded={rounded}
      testID={testID || id || accessibility}
    >
      <ButtonWrapper
        hasBorder={hasBorder}
        buttonVariant={variant}
        disabled={disabled}
        rounded={rounded}
        {...rest}
      >
        {loading && <Loading contrast={contrast} />}
        {!loading && (
          <>
            {!!leftIconName && (
              <Icon accessibility="" name={leftIconName as string} leftIcon />
            )}
            <TextButton
              style={textStyle}
              disabled={disabled}
              variant={typographyVariant}
              buttonVariant={variant}
            >
              {children}
            </TextButton>
            {!!rightIconName && (
              <Icon accessibility="" name={rightIconName as string} rightIcon />
            )}
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
