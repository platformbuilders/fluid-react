import { FC } from 'react';
import Icons from '../Icons';
import { ContentWrapper, Loading, TextButton, Touchable } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  id,
  children,
  onPress,
  accessibility,
  disabled = false,
  loading = false,
  $fullWidth = false,
  variant = 'filled',
  typographyVariant = 'md',
  leftIconName,
  rightIconName,
  $colorVariant = 'primary',
  size = 'normal',
  ...rest
}) => {
  const LeftIcon = leftIconName ? Icons[leftIconName] : undefined;
  const RightIcon = rightIconName ? Icons[rightIconName] : undefined;
  const contentWrapperProps = {
    variant,
    size,
    $fullWidth,
  };
  const touchableProps = {
    accessibility,
    disabled: loading || disabled,
    variant,
    onPress,
    $colorVariant,
    size,
  };

  return (
    <Touchable id={id || accessibility} {...touchableProps} {...rest}>
      {loading ? (
        <Loading />
      ) : (
        <ContentWrapper
          accessibility="container button"
          {...contentWrapperProps}
        >
          {LeftIcon ? <LeftIcon /> : null}
          <TextButton className="text-button" variant={typographyVariant}>
            {children}
          </TextButton>
          {RightIcon ? <RightIcon /> : null}
        </ContentWrapper>
      )}
    </Touchable>
  );
};

export default Button;
export * from './types';
