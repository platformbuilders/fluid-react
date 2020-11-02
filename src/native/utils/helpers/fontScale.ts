import { RFValue } from 'react-native-responsive-fontsize';

export const scaledFontSize = (
  size: number | string,
  baselineFactor?: 280,
): number => {
  const value = typeof size === 'string' ? parseInt(size, 10) : size;
  return RFValue(value, baselineFactor);
};
