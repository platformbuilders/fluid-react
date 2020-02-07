import React from 'react';
import NavigationService from '~/navigation/service';
import { Title, BackIcon } from './styles';

interface HeaderBackButtonProps {
  contrast?: boolean;
}

export const Header = (): JSX.Element => <Title>Header</Title>;

export const HeaderBackButton: React.FC<HeaderBackButtonProps> = () => (
  <BackIcon onPress={(): void => NavigationService.goBack()} />
);
