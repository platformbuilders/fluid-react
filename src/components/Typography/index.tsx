import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { human } from 'react-native-typography';
import { Theme, Metrics, Variant } from '~/utils/types';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';

interface Props {
  variant: Variant;
  children?: string | string[];
  style?: object[];
  textRef?: any;
  theme: Theme & Metrics;
}

const Typography: React.FC<Props> = ({
  style = [{}],
  variant = 'body',
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
