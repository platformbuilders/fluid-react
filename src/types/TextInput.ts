import { ChangeEvent, FocusEvent } from 'react';
import { InputBaseComponentProps } from '@material-ui/core';

export type TextInputType = {
  mask?: string;
  maskType?: string;
  formatChars?: { [key: string]: string };
  label?: string;
  error?: string | boolean;
  placeholder?: string;
  fullWidth?: boolean;
  name: string;
  id: string;
  type: string;
  maxlength?: string;
  pattern?: string;
  value: string | number | string[] | undefined;
  autoFocus?: boolean;
  variant?: InputVariants;
  inputProps?: InputBaseComponentProps;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    e:
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLDivElement>,
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export type InputVariants = 'filled' | 'standard' | 'outlined';
