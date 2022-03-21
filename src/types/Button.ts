import { DefaultTheme } from 'styled-components';
import { ColorsVariants } from './Colors';

export type ButtonType = {
  onPress(): void;
  type?: string;
  variant?: ColorsVariants;
  transparent?: boolean;
  flat?: boolean;
  hasBorder?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: string;
  theme?: DefaultTheme;
};
