import { HapticFeedbackType } from 'react-native-haptic';
import { Haptic } from '~/utils/modules';
import { isIOS } from '~/utils/helpers';

export const generateHaptic = (haptic: HapticFeedbackType = 'impact'): void => {
  if (isIOS()) {
    Haptic.generate(haptic);
  }
};
