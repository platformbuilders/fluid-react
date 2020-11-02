import { moderateScale } from 'react-native-size-matters';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Spacings } from '../types';

export default {
  topSpacing: `${getStatusBarHeight()}px`,
  bottomSpacing: `${isIphoneX() ? moderateScale(10) : 0}px`,
  sceneSpacing: `${moderateScale(24)}px`,
  sectionSpacing: `${moderateScale(40)}px`,
  minimumSpacing: `${moderateScale(4)}px`,
  smallSpacing: `${moderateScale(12)}px`,
  mediumSpacing: `${moderateScale(20)}px`,
  largeSpacing: `${moderateScale(24)}px`,
  giantSpacing: `${moderateScale(72)}px`,
} as Spacings;
