import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
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
  type = 'material',
  size = 20,
  color = undefined,
  style = [{}],
  onPress = (): void => {},
  borderColor = '',
  backgroundColor = '',
  ...rest
}) => {
  const iconSet = {
    feather: FeatherIcons,
    material: MaterialIcons,
    fontAwesome: FontAwesomeIcons,
    entypo: EntypoIcons,
    fontisto: Fontisto,
  };
  // eslint-disable-next-line prettier/prettier
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const Svg = Icons[`Icon${iconName}`];
  const IconComponent = iconSet[type];

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
            <IconComponent name={name} color={color} size={size} />
          )}
        </View>
      </Touchable>
    </Animated.View>
  );
};

export default Icon;
