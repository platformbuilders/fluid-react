import { FC, ReactNode } from 'react';
import {
  ButtonVariants,
  TypographyVariants,
} from '@platformbuilders/theme-toolkit';
import RadixIcon from '@radix-ui/react-icons';
import Icons from '../Icons';
import { ContentWrapper, Loading, TextButton, Touchable } from './styles';

type TouchableType = {
  id?: string;
  accessibility: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
};

export type ButtonProps = {
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  textStyle?: any;
  rounded?: boolean;
  loading?: boolean;
  contrast?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
  minWidth?: string | number;
  maxWidth?: string | number;
  leftIconName?: keyof typeof RadixIcon;
  rightIconName?: keyof typeof RadixIcon;
  hasBorder?: boolean;
} & TouchableType;

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
