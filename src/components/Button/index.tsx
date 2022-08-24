import { FC } from 'react';
import { ButtonProps } from '../../types';
import { ButtonWrapper, Icon, Loading, TextButton, Touchable } from './styles';

const Button: FC<ButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
  testID,
  textStyle = {},
  disabled = false,
  rounded = false,
  loading = false,
  contrast = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'button',
  rightIconName,
  leftIconName,
  ...rest
}) => {
  return (
    <Touchable
      id={id || accessibility}
      accessibility={accessibility}
      accessibilityLabel={accessibilityLabel || accessibility}
      testID={testID || id || accessibility}
      disabled={loading || disabled}
      onPress={onPress}
      rounded={rounded}
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
