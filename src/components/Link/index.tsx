import React from 'react';
import { Touchable } from '~/components';
import { Text } from './styles';

type Props = {
  children: string;
  onPress: () => null;
  variant?: string;
  accessibility: string;
};

const Link: React.FC<Props> = ({
  onPress,
  children,
  accessibility,
  variant = 'body',
  ...rest
}) => (
  <Touchable onPress={onPress} accessibility={accessibility} {...rest}>
    <Text variant={variant}>{children}</Text>
  </Touchable>
);

export default Link;
