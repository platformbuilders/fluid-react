import { StyleProp, TextStyle } from 'react-native';
import { Variants } from './Variants';
import { Theme } from './Theme';

export interface Typography {
  variant?: Variants;
  children?: string | string[] | any;
  style?: StyleProp<TextStyle>;
  textRef?: any;
  theme: Theme;
}
