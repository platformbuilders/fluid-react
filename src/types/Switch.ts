import { ButtonVariants } from '@platformbuilders/theme-toolkit';

export type SwitchProps = {
  checkedIcon?: JSX.Element;
  variant?: ButtonVariants;
  disabled?: boolean;
  icon?: JSX.Element;
  size?: 'small' | 'medium';
  value?: unknown;
  label?: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
