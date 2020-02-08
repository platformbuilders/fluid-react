import React, { useContext } from 'react';
import { Title, BackIcon } from './styles';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from 'styled-components';

interface HeaderBackButtonProps {
  contrast?: boolean;
  onPress?: () => any;
}

export const Header = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Title>Header</Title>;
    </ThemeProvider>
  );
};

export const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({
  onPress = (): void => {},
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <BackIcon onPress={(): void => onPress()} />
    </ThemeProvider>
  );
};

HeaderBackButton.defaultProps = {
  onPress: (): void => {},
};
