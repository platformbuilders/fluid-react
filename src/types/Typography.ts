import { PropsWithChildren } from 'react';
import { KnownTarget } from 'styled-components/dist/types';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';

type TypographyTypeBase = PropsWithChildren<{
  variant?: TypographyVariants;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
  as?: KnownTarget;
}>;

export type TypographyTypeProps = TypographyTypeBase & {
  lineHeightVariant?: TypographyVariants;
};

export type TypographyTypeStyleProps = TypographyTypeBase & {
  $lineHeightVariant?: TypographyVariants;
  $variant?: TypographyVariants;
};
