import { TouchableType } from './TouchableType';
import { HitSlopType } from './Common';

export interface IconType extends TouchableType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: HitSlopType;
}
