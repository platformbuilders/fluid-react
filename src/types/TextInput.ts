import { ChangeEvent, RefObject } from 'react';
import TextInputMask from 'react-input-mask';

export type TextInputType = {
  mask?: string;
  maskType?: string;
  label?: string;
  error?: string | boolean;
  placeholder?: string;
  fullWidth?: boolean;
  name: string;
  id: string;
  type: string;
  ref?: RefObject<TextInputMask>;
  maxlength?: string;
  pattern?: string;
  value: string | number | string[] | undefined;
  autoFocus?: boolean;
  onChange?: (e: string | ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLDivElement>) => void;
};
