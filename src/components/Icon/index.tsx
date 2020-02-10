import React from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../Touchable';
import * as Icons from '~/assets/svg';

type Props = {
  name: string;
  touchable?: boolean;
  size?: number;
  accessibility?: string;
  color?: string;
  style?: any;
  onPress?(): void;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

export const Icon: React.FC<Props> = ({
  name,
  accessibility,
  touchable = true,
  size = 20,
  color = undefined,
  style = [{}],
  onPress = (): void => {},
  borderColor = '',
  backgroundColor = '',
  ...rest
}) => {
  // eslint-disable-next-line prettier/prettier
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const Svg = Icons[`Icon${iconName}`];

  return (
    <Animated.View style={style}>
      <Touchable
        accessibility={accessibility || iconName}
        touchable={!touchable}
        onPress={onPress}
        {...rest}
      >
        <View>
          {Svg ? (
            <Svg
              width={size}
              height={size}
              color={color}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            />
          ) : (
            <MaterialIcons name={name} color={color} size={size} />
          )}
        </View>
      </Touchable>
    </Animated.View>
  );
};

export default Icon;
