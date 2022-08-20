import { ReactNode } from 'react';
import {
  ButtonVariants,
  TypographyVariants,
} from '@platformbuilders/theme-toolkit';
import { TouchableType } from './TouchableType';

export type ButtonProps = {
  style?: any;
  textStyle?: any;
  rounded?: boolean;
  loading?: boolean;
  contrast?: boolean;
  flat?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
  children?: string | ReactNode;
  minWidth?: string | number;
  maxWidth?: string | number;
  leftIconName?: string;
  rightIconName?: string;
  hasBorder?: boolean;
} & TouchableType;
