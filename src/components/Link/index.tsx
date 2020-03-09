import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Variants, TouchableType } from '../../utils/types';
import { Text } from './styles';
import Touchable from '../Touchable';
import { ThemeContext } from '../ThemeContext';

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
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Touchable
        id={id}
        onPress={onPress}
        accessibility={accessibility}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        {...rest}
      >
        <Text variant={variant}>{children}</Text>
      </Touchable>
    </ThemeProvider>
  );
};

export default Link;
