import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Touchable } from '~/components';
import { Variant } from '~/utils/types';
import { Text } from './styles';
import { ThemeContext } from '../ThemeContext';

type Props = {
  children: string;
  onPress: () => null;
  variant?: Variant;
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
