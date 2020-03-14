import { TextInputProps, StyleProp, TextStyle } from 'react-native';
import { TextInputMaskTypeProp } from 'react-native-masked-text';

export interface TextInputType extends TextInputProps {
  id: string;
  accessibility: string;
  inputRef?: any;
  options?: any;
  large?: boolean;
  borderless?: boolean;
  contrast?: boolean;
  centered?: boolean;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  maskType?: TextInputMaskTypeProp;
  label?: string;
  iconName?: string;
  status?: string;
  error?: string | boolean;
  iconHitSlop?: object;
  labelStyle?: any;
  isPlaceholder?: boolean;
  onPressIcon?(x?: any): void;
  onBlur?(x?: any): void;
  onFocus?(x?: any): void;
  onSubmitEditing?(x?: any): void;
}

export interface MaskedTextInputType extends TextInputType {
  maskType: TextInputMaskTypeProp;
}
