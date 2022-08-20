import { FC } from 'react';
import { ButtonType } from '../../types';
import If from '../If';
import { LoadingIndicator, StyledButton } from './styles';

const Button: FC<ButtonType> = ({
  children,
  type,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  ...rest
}) => (
  <StyledButton
    onClick={onPress}
    variant={variant}
    disabled={disabled}
    type={type || undefined}
    {...rest}
  >
    <If condition={!!loading}>
      <LoadingIndicator />
    </If>
    <If condition={!loading}>{children}</If>
  </StyledButton>
);

export default Button;
