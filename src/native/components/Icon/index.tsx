import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconType } from '../../types';
import Touchable from '../Touchable';
import If from '../If';
import { FaBrands, FaRegular, FaLight, FaSolid } from './FontAwesomeProIcons';
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
  iconSets,
  width,
  height,
  fontAwesomePro = '',
  ...rest
}) => {
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const Svg = iconSets ? iconSets[`Icon${iconName}`] : Icons[`Icon${iconName}`];
  const fontAwesomeProComponents = {
    'fa-brands': FaBrands,
    'fa-light': FaLight,
    'fa-regular': FaRegular,
    'fa-solid': FaSolid,
  };
  const FaProComponent = fontAwesomeProComponents[fontAwesomePro];
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
          <If condition={Svg}>
            <Svg
              width={width || size}
              height={height || size}
              color={color}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            />
          </If>

          <If condition={fontAwesomePro !== ''}>
            <FaProComponent name={name} color={color} size={size} />
          </If>

          <If condition={!Svg && fontAwesomePro === ''}>
            <MaterialIcons name={name} color={color} size={size} />
          </If>
        </View>
      </Touchable>
    </Animated.View>
  );
};

export default Icon;
