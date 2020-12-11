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
  maxlength?: string;
  pattern?: string;
  value: string | number | string[] | undefined;
  autoFocus?: boolean;
  onChange?: (value: any) => void;
  onBlur?: (e: any) => void;
};
