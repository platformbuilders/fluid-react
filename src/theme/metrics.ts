import { Metrics } from '../types';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size: number): number =>
  (window.innerWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number =>
  (window.innerHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default {
  sceneSpacing: 24,
  smallSpacing: 5,
  mediumSpacing: 10,
  largeSpacing: 20,
  sectionSpacing: 38,
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  scale,
  verticalScale,
  moderateScale,
} as Metrics;
