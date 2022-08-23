import { ColorsVariants } from '..';

export type SwitchProps = {
  checkedIcon?: JSX.Element;
  variant?: ColorsVariants;
  disabled?: boolean;
  icon?: JSX.Element;
  size?: 'small' | 'medium';
  value?: unknown;
  label?: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
