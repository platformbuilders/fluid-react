import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconType } from '../../types';
import Touchable from '../Touchable';
import * as Icons from '../../assets/svg';

export const Icon: FC<IconType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  name = '',
  touchable = true,
  size = 20,
  color = undefined,
  style = [{}],
  onPress = (): void => {},
  borderColor = '',
  backgroundColor = '',
  ProjectIcons,
  ...rest
}) => {
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const Svg = ProjectIcons
    ? ProjectIcons[`Icon${iconName}`]
    : Icons[`Icon${iconName}`];

  return (
    <Animated.View style={style}>
      <Touchable
        id={id}
        accessibility={accessibility || iconName}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id}
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
