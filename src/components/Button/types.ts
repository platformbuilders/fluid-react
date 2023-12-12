import { ReactNode } from 'react';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';
import RadixIcon from '@radix-ui/react-icons';

export type ButtonVariants = 'filled' | 'ghost' | 'tint' | 'outline';
export type ButtonColorType =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export type ButtonProps = {
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  fullWidth?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
  leftIconName?: keyof typeof RadixIcon;
  rightIconName?: keyof typeof RadixIcon;
  colorVariant?: ButtonColorType;
  size?: string;
} & TouchableType;

export type TouchableType = {
  id?: string;
  accessibility: string;
  testID?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
};
