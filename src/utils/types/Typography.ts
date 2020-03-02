import { Variants } from './Variants';
import { Theme } from './Theme';

export interface Typography {
  variant?: Variants;
  children?: string | string[] | any;
  style?: any;
  textRef?: any;
  theme: Theme;
}
