import { Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  verticalScale,
  moderateScale,
} from '~/utils/modules';
import { Metrics } from '~/utils/types';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  headerSpacing: `${verticalScale(20)}px`,
  sceneSpacing: `${moderateScale(32)}px`,
  smallSpacing: `${moderateScale(8)}px`,
  mediumSpacing: `${moderateScale(12)}px`,
  largeSpacing: `${moderateScale(20)}px`,
  giantSpacing: `${moderateScale(26)}px`,
  sectionSpacing: `${moderateScale(38)}px`,
  statusHeight: `${getStatusBarHeight()}px`,
  smallRadius: `${moderateScale(3)}px`,
  mediumRadius: `${moderateScale(8)}px`,
  largeRadius: `${moderateScale(15)}px`,
  modalRadius: `${moderateScale(20)}px`,
  buttonRadius: `${moderateScale(38)}px`,
  screenWidth,
  screenHeight,
} as Metrics;
