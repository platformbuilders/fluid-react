import { FC } from 'react';
import { ButtonProps } from '../../types';
import { Icon, Loading, TextButton, Touchable } from './styles';

const Button: FC<ButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  textStyle = {},
  disabled = false,
  rounded = false,
  loading = false,
  contrast = false,
  hasBorder = false,
  variant = 'primary',
  typographyVariant = 'md',
  rightIconName,
  leftIconName,
  ...rest
}) => {
  return (
    <Touchable
      id={id || accessibility}
      accessibility={accessibility}
      disabled={loading || disabled}
      onPress={onPress}
      $hasBorder={hasBorder}
      $rounded={rounded}
      variant={variant}
      {...rest}
    >
      {loading && <Loading contrast={contrast} />}
      {!loading && (
        <>
          {!!leftIconName && <Icon />}
          <TextButton
            style={textStyle}
            disabled={disabled}
            variant={typographyVariant}
            $buttonVariant={variant}
          >
            {children}
          </TextButton>
          {!!rightIconName && <Icon />}
        </>
      )}
    </Touchable>
  );
};

export default Button;
