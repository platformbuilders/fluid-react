import { TouchableType } from './TouchableType';
import { HitSlopType } from './Common';

export type FontType =
  | 'material'
  | 'fa-brands'
  | 'fa-light'
  | 'fa-regular'
  | 'fa-solid';

export interface IconType extends TouchableType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: HitSlopType;
  iconSets?: any;
  width?: number;
  height?: number;
  type?: FontType;
}
