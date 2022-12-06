import { ReactNode } from 'react';
import {
  ButtonVariants,
  TypographyVariants,
} from '@platformbuilders/theme-toolkit';
import { TouchableType as DefaultTouchable } from './TouchableType';

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
  leftIconName?: string;
  rightIconName?: string;
  hasBorder?: boolean;
} & DefaultTouchable;
