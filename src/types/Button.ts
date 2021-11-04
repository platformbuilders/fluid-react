import { ColorsVariants } from 'src';

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
};
