import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableType } from '../../utils/types';
import Touchable from '../Touchable';
import * as Icons from '../../assets/svg';

interface Props extends TouchableType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

export const Icon: FC<Props> = ({
  id,
  accessibility,
  name = '',
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
        id={id}
        accessibility={accessibility || iconName}
        disabled={!touchable}
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
