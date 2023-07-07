import { PropsWithChildren } from 'react';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';

type TypographyTypeBase = PropsWithChildren<{
  variant?: TypographyVariants;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}>;

export type TypographyTypeProps = TypographyTypeBase & {
  lineHeightVariant?: TypographyVariants;
};

export type TypographyTypeStyleProps = TypographyTypeBase & {
  $lineHeightVariant?: TypographyVariants;
};
