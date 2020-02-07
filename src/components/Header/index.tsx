import React from 'react';
import { Title, BackIcon } from './styles';

interface HeaderBackButtonProps {
  contrast?: boolean;
  onPress?: () => any;
}

export const Header = (): JSX.Element => <Title>Header</Title>;

export const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({
  onPress = (): void => {},
}) => <BackIcon onPress={(): void => onPress()} />;

HeaderBackButton.defaultProps = {
  onPress: (): void => {},
};
