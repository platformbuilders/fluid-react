import { StyleProp, TextStyle } from 'react-native';
import { TypographyVariants } from './Variants';

export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | any;
  style?: StyleProp<TextStyle>;
  textRef?: any;
}
