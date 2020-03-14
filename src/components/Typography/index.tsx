import React, { FC } from 'react';
import { human } from 'react-native-typography';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  style = [{}],
  variant = 'body',
  textRef = React.createRef(),
  children,
  ...rest
}) => (
  <Text ref={textRef} style={[human[variant], style]} {...rest}>
    {children}
  </Text>
);

export default Typography;
