import { ReactNode } from 'react';
import { ButtonVariants } from '@platformbuilders/theme-toolkit';
import { TouchableType as DefaultTouchable } from './TouchableType';
import { TypographyVariants } from './Variants';

export type ButtonProps = {
  children?: string | ReactNode;
  className?: string;
  contrast?: boolean;
  hasBorder?: boolean;
  leftIconName?: string;
  loading?: boolean;
  maxWidth?: string | number;
  minWidth?: string | number;
  rightIconName?: string;
  rounded?: boolean;
  style?: any;
  textStyle?: any;
  type?: 'button' | 'submit' | 'reset';
  typographyVariant?: TypographyVariants;
  variant?: ButtonVariants;
} & DefaultTouchable;
