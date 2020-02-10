import { TextInputMaskTypeProp } from 'react-native-masked-text';

type KeyboardType =
  | 'default'
  | 'url'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'visible-password'
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'number-pad'
  | 'name-phone-pad'
  | 'decimal-pad'
  | 'twitter'
  | 'web-search'
  | undefined;

type ReturnKeyType =
  | 'default'
  | 'none'
  | 'search'
  | 'send'
  | 'done'
  | 'go'
  | 'next'
  | 'previous'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call'
  | undefined;

type MaskedInput = {
  maskType: TextInputMaskTypeProp;
};
export interface TextInput {
  id?: string;
  accessibility?: string;
  dark?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  autoComplete?: string;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  autoFocus?: boolean;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  label?: string;
  value?: string;
  placeholder?: string;
  iconName?: string | null;
  maskType?: TextInputMaskTypeProp | null;
  status?: string;
  error?: string | boolean;
  iconHitSlop?: object;
  style?: any;
  textStyle?: any;
  labelStyle?: any;
  isPlaceholder?: boolean;
  onPressIcon?(x?: any): void;
  onBlur?(x?: any): void;
  onFocus?(x?: any): void;
  onChangeText?(x?: any): void;
  onSubmitEditing?(x?: any): void;
}

export type MaskedTextInput = TextInput & MaskedInput;
