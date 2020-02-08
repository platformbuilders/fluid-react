import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { human } from 'react-native-typography';
import { Theme, Metrics } from '~/utils/types';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';

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
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Text
        ref={textRef}
        style={[human[variant], { color: theme.primary.contrast }, style]}
        {...rest}
      >
        {children}
      </Text>
    </ThemeProvider>
  );
};

export default Typography;
