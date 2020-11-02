import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ButtonVariants, TypographyVariants } from './Variants';
import { TouchableType } from './TouchableType';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  contrast?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string;
} & TouchableType;
