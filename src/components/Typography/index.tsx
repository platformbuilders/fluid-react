import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { human } from 'react-native-typography';
import { Typography as TypographyType } from '../../utils/types';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';

const Typography: FC<TypographyType> = ({
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
