import { StyleProp, TextStyle } from 'react-native';
import { Variants } from './Variants';

export interface TypographyType {
  variant?: Variants;
  children?: string | string[] | any;
  style?: StyleProp<TextStyle>;
  textRef?: any;
}
