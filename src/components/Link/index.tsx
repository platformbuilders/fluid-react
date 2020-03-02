import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Variants } from '../../utils/types';
import { Text } from './styles';
import Touchable from '../Touchable';
import { ThemeContext } from '../ThemeContext';

type Props = {
  children: string;
  onPress: () => null;
  variant?: Variants;
  accessibility: string;
};

const Link: FC<Props> = ({
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
