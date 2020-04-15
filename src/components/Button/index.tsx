import React, { FC } from 'react';
import { StyledButton, LoadingIndicator } from './styles';
import { ButtonType } from '../../types';
import If from '../If';

const Button: FC<ButtonType> = ({
  children,
  onPress = (): void => {},
  type,
  secondary = false,
  loading = false,
  ...rest
}) => (
  <StyledButton
    onClick={onPress}
    secondary={secondary || undefined}
    type={type || undefined}
    {...rest}
  >
    <If condition={loading}>
      <LoadingIndicator secondary={secondary || undefined} />
    </If>
    <If condition={!loading}>{children}</If>
  </StyledButton>
);

export default Button;
