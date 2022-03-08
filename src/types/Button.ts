import { DefaultTheme } from 'styled-components';

export type ButtonType = {
  onPress(): void;
  type?: string;
  variant?: ButtonVariants;
  transparent?: boolean;
  flat?: boolean;
  hasBorder?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: string;
  theme: DefaultTheme;
};

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'danger'
  | 'warning'
  | 'info';
