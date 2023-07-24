import { FC } from 'react';
import { ButtonProps } from '../../types';
import Icons from '../Icons';
import { ContentWrapper, Loading, TextButton, Touchable } from './styles';

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
        <ContentWrapper $buttonVariant={variant}>
          {LeftIcon ? <LeftIcon /> : null}
          <TextButton
            style={textStyle}
            disabled={disabled}
            variant={typographyVariant}
            $buttonVariant={variant}
          >
            {children}
          </TextButton>
          {RightIcon ? <RightIcon /> : null}
        </ContentWrapper>
      )}
    </Touchable>
  );
};

export default Button;
