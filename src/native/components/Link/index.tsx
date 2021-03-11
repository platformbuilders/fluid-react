import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TypographyVariants, TouchableType } from '../../types';
import { Text } from './styles';
import Touchable from '../Touchable';

interface Props extends TouchableType {
  variant?: TypographyVariants;
  style?: StyleProp<ViewStyle>;
}

const Link: FC<Props> = ({
  id,
  onPress,
  children,
  accessibility,
  accessibilityLabel,
  testID,
  variant = 'body',
  style,
  ...rest
}) => (
  <Touchable
    id={id || accessibility}
    onPress={onPress}
    accessibility={accessibility}
    accessibilityLabel={accessibilityLabel || accessibility}
    testID={testID || id || accessibility}
    {...rest}
  >
    <Text
      testID={`text_${id}`}
      accessibilityLabel={`Texto ${accessibility}`}
      accessibility={`Texto ${accessibility}`}
      style={style}
      variant={variant}
    >
      {children}
    </Text>
  </Touchable>
);

export default Link;
