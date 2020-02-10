import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HapticFeedbackType } from 'react-native-haptic';
import { generateHaptic } from '../../utils/helpers';

type Props = {
  onPress: (x: any) => void;
  children: JSX.Element;
  accessibility: string;
  haptic?: HapticFeedbackType;
  touchable?: boolean;
};

const CommonTouchable: React.FC<Props> = ({
  onPress = (): void => {},
  haptic = 'impact',
  touchable = true,
  accessibility,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    accessibilityLabel={accessibility}
    disabled={touchable}
    onPress={(e): void => {
      generateHaptic(haptic);
      onPress(e);
    }}
  />
);

export default CommonTouchable;
