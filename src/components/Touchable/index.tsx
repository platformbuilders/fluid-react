import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { HapticFeedbackType } from 'react-native-haptic';
import { generateHaptic } from '../../utils/helpers';

type Props = {
  onPress: (x: any) => void;
  children: JSX.Element;
  accessibility: string;
  haptic?: HapticFeedbackType;
  disabled?: boolean;
};

const CommonTouchable: FC<Props> = ({
  onPress = (): void => {},
  haptic = 'impact',
  disabled = false,
  accessibility,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    accessibilityLabel={accessibility}
    disabled={disabled}
    onPress={(e): void => {
      generateHaptic(haptic);
      onPress(e);
    }}
  />
);

export default CommonTouchable;
