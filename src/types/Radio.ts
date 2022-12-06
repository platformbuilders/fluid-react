import { ButtonVariants } from '@platformbuilders/theme-toolkit';

export type RadioProps = {
  checked?: boolean;
  checkedIcon?: JSX.Element;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  id?: string;
  label?: string;
  labelPlacement?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium';
  value?: string;
  variant?: ButtonVariants;
};

export type RadioGroupProps = {
  className?: string;
  defaultValue?: any;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
  value?: any;
};
