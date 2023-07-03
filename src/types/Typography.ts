import { PropsWithChildren } from 'react';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';

export type TypographyType = PropsWithChildren<{
  variant?: TypographyVariants;
  lineHeightVariant?: TypographyVariants;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}>;
