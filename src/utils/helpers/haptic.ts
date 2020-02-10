import { HapticFeedbackType } from 'react-native-haptic';
import { Haptic } from '../modules';
import { isIOS } from './isIOS';

export const generateHaptic = (haptic: HapticFeedbackType = 'impact'): void => {
  if (isIOS()) {
    Haptic.generate(haptic);
  }
};
