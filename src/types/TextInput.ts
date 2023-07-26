import { ChangeEvent, FocusEvent } from 'react';

export type TextInputType = {
  style?: any;
  textInputStyle?: any;
  maskOptions?: any;
  label: string;
  message?: string;
  name: string;
  id: string;
  maxLength?: number;
  value: string;
  autoFocus?: boolean;
  onChange: (e: Partial<ChangeEvent<any>>) => void;
  onBlur?: (
    e:
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
      | ChangeEvent<HTMLDivElement>,
  ) => void;
  onFocus?:
    | ((
        e:
          | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          | ChangeEvent<HTMLDivElement>,
      ) => void)
    | undefined;
};
