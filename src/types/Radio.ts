import { ColorsVariants } from '..';

export type RadioProps = {
  id?: string;
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  variant?: ColorsVariants;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  label?: string;
  labelPlacement?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
