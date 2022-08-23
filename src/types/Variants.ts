// import { TypographyVariants as FluidTypographyVariants } from '@platformbuilders/theme-toolkit';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export type TypographyType = {
  variant?: TypographyVariants;
  children?: React.ReactNode;
};
