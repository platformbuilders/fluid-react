import { FC } from 'react';
import { ButtonProps } from '../../types';
import Icons from '../Icons';
import {
  LeftIconWrapper,
  Loading,
  RightIconWrapper,
  TextButton,
  Touchable,
} from './styles';

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
  leftIconName,
  rightIconName,
  ...rest
}) => {
  const LeftIcon = leftIconName ? Icons[leftIconName] : undefined;
  const RightIcon = rightIconName ? Icons[rightIconName] : undefined;

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
      {loading ? (
        <Loading contrast={contrast} />
      ) : (
        <>
          {LeftIcon ? (
            <LeftIconWrapper>
              <LeftIcon />
            </LeftIconWrapper>
          ) : null}
          <TextButton
            style={textStyle}
            disabled={disabled}
            variant={typographyVariant}
            $buttonVariant={variant}
          >
            {children}
          </TextButton>
          {RightIcon ? (
            <RightIconWrapper>
              <RightIcon />
            </RightIconWrapper>
          ) : null}
        </>
      )}
    </Touchable>
  );
};

export default Button;
