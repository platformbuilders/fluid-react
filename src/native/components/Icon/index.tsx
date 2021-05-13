import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconType } from '../../types';
import Touchable from '../Touchable';
import { FaBrands, FaRegular, FaLight, FaSolid } from './FontAwesomeProIcons';
import * as SvgIcons from '../../assets/svg';

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
  type = 'material',
  iconSets,
  width,
  height,
  ...rest
}) => {
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const Svg = iconSets
    ? iconSets[`Icon${iconName}`]
    : SvgIcons[`Icon${iconName}`];

  const iconSet = {
    material: MaterialIcons,
    'fa-brands': FaBrands,
    'fa-light': FaLight,
    'fa-regular': FaRegular,
    'fa-solid': FaSolid,
  };

  const IconComponent = iconSet[type];

  return (
    <Animated.View style={style}>
      <Touchable
        id={id || accessibility}
        accessibility={accessibility || iconName}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id || accessibility}
        disabled={!touchable}
        onPress={onPress}
        {...rest}
      >
        <View>
          {Svg ? (
            <Svg
              width={width || size}
              height={height || size}
              color={color}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            />
          ) : (
            <IconComponent name={name} color={color} size={size} />
          )}
        </View>
      </Touchable>
    </Animated.View>
  );
};

export default Icon;
