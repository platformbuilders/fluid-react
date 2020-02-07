import React from 'react';
import { withTheme } from 'styled-components';
import { human } from 'react-native-typography';
import { Theme, Metrics } from '~/utils/types';
import { Text } from './styles';

const variants = [
  'largeTitle',
  'title1',
  'title2',
  'title3',
  'title4',
  'headline',
  'body',
  'subhead',
  'footnote',
  'caption1',
  'caption2',
];

interface Props {
  variant: string;
  children?: string | string[];
  style?: object[];
  textRef?: any;
  theme: Theme & Metrics;
}

const Typography: React.FC<Props> = ({
  style = [{}],
  variant = variants[7],
  textRef = React.createRef(),
  children,
  theme,
  ...rest
}) => (
  <Text
    ref={textRef}
    style={[human[variant], { color: theme.primary.contrast }, style]}
    {...rest}
  >
    {children}
  </Text>
);

export default withTheme(Typography);
