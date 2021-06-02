import React, { FC } from 'react';
import { ButtonType } from '../../types';
import If from '../If';
import { LoadingIndicator, StyledButton } from './styles';

const Button: FC<ButtonType> = ({
  children,
  type,
  onPress,
  loading = false,
  disabled = false,
  secondary = false,
  ...rest
}) => (
  <StyledButton
    onClick={onPress}
    disabled={disabled}
    secondary={secondary || undefined}
    type={type || undefined}
    {...rest}
  >
    <If condition={!!loading}>
      <LoadingIndicator secondary={secondary || undefined} />
    </If>
    <If condition={!loading}>{children}</If>
  </StyledButton>
);

export default Button;
