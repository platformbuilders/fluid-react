import Haptic, { HapticFeedbackType } from 'react-native-haptic';
import { isIOS } from '@platformbuilders/helpers';

export const generateHaptic = (haptic: HapticFeedbackType = 'impact'): void => {
  if (isIOS()) {
    Haptic.generate(haptic);
  }
};
