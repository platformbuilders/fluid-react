import { TouchableType } from './TouchableType';

export interface IconType extends TouchableType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}
