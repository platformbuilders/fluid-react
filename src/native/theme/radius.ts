import { moderateScale } from 'react-native-size-matters';
import { Radius } from '../types';

export default {
  smallRadius: `${moderateScale(3)}px`,
  mediumRadius: `${moderateScale(8)}px`,
  largeRadius: `${moderateScale(15)}px`,
  modalRadius: `${moderateScale(20)}px`,
  buttonRadius: `${moderateScale(7)}px`,
} as Radius;
