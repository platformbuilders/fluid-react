import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ReactNode } from 'react';
import { ButtonVariants, TypographyVariants } from './Variants';
import { TouchableType } from './TouchableType';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  loading?: boolean;
  contrast?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
} & TouchableType;
