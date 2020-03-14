import React, { FC } from 'react';
import { Variants, TouchableType } from '../../types';
import { Text } from './styles';
import Touchable from '../Touchable';

interface Props extends TouchableType {
  children: string | string[];
  variant?: Variants;
}

const Link: FC<Props> = ({
  id,
  onPress,
  children,
  accessibility,
  accessibilityLabel,
  testID,
  variant = 'body',
  ...rest
}) => (
  <Touchable
    id={id}
    onPress={onPress}
    accessibility={accessibility}
    accessibilityLabel={accessibilityLabel}
    testID={testID || id}
    {...rest}
  >
    <Text variant={variant}>{children}</Text>
  </Touchable>
);

export default Link;
