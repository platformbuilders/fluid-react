import React, { useContext } from 'react';
import { Touchable } from '~/components';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from 'styled-components';

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
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Touchable onPress={onPress} accessibility={accessibility} {...rest}>
        <Text variant={variant}>{children}</Text>
      </Touchable>
    </ThemeProvider>
  );
};

export default Link;
