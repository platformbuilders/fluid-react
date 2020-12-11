import { RefObject } from 'react';
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
  onChange?: (value: any) => void;
  onBlur?: (e: any) => void;
};
