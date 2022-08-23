import { ColorsVariants } from '..';

export type SwitchProps = {
  checkedIcon?: React.ReactNode;
  variant?: ColorsVariants;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  value?: unknown;
  label?: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
