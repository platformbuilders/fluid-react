import { StyleProp, TextStyle } from 'react-native';
import { TypographyVariants } from './Variants';

type TypographyStyle = {
  fontSize: number;
  lineHeight: number;
};

export type TypographyTheme = {
  largeTitle: TypographyStyle;
  title1: TypographyStyle;
  title2: TypographyStyle;
  title3: TypographyStyle;
  headline: TypographyStyle;
  body: TypographyStyle;
  callout: TypographyStyle;
  subhead: TypographyStyle;
  footnote: TypographyStyle;
  caption1: TypographyStyle;
  caption2: TypographyStyle;
};

export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  style?: StyleProp<TextStyle>;
  textRef?: any;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
}
