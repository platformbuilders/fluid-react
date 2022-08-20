import { FC } from 'react';
import { ButtonProps } from '../../types';
import If from '../If';
import { LoadingIndicator, StyledButton } from './styles';

const Button: FC<ButtonProps> = ({
  children,
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
    {...rest}
  >
    <If condition={!!loading}>
      <LoadingIndicator />
    </If>
    <If condition={!loading}>{children}</If>
  </StyledButton>
);

export default Button;
