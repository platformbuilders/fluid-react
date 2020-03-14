import { Dimensions } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { Metrics } from '../types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  headerSpacing: `${verticalScale(20)}px`,
  sceneSpacing: `${moderateScale(32)}px`,
  smallSpacing: `${moderateScale(8)}px`,
  mediumSpacing: `${moderateScale(12)}px`,
  largeSpacing: `${moderateScale(20)}px`,
  giantSpacing: `${moderateScale(26)}px`,
  sectionSpacing: `${moderateScale(38)}px`,
  statusHeight: `${moderateScale(44)}px`,
  smallRadius: `${moderateScale(3)}px`,
  mediumRadius: `${moderateScale(8)}px`,
  largeRadius: `${moderateScale(15)}px`,
  modalRadius: `${moderateScale(20)}px`,
  buttonRadius: `${moderateScale(38)}px`,
  screenWidth,
  screenHeight,
} as Metrics;
