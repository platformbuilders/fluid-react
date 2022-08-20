import { ColorsVariants } from '..';

export type RadioProps = {
  id?: string;
  checked?: boolean;
  checkedIcon?: JSX.Element;
  variant?: ColorsVariants;
  disabled?: boolean;
  icon?: JSX.Element;
  size?: 'small' | 'medium';
  label?: string;
  labelPlacement?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RadioGroupProps = {
  defaultValue?: any;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
  value?: any;
};
