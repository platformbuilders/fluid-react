import { RefObject } from 'react';
import {
  TextInputProps,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import { TextInputMaskTypeProp } from '@platformbuilders/react-native-masked-text';

import { HitSlopType } from './Common';
import { TypographyVariants } from './Variants';

export type TextInputType = {
  id: string;
  accessibility: string;
  inputRef?: any;
  options?: any;
  ref?: RefObject<any>;
  variant?: TypographyVariants;
  large?: boolean;
  withBottomline?: boolean;
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
  iconHitSlop?: HitSlopType;
  labelStyle?: any;
  isPlaceholder?: boolean;
  onPressIcon?(x?: any): void;
  onRightIconPress?(x?: any): void;
  onBlur?(x?: any): void;
  onFocus?(x?: any): void;
  onSubmitEditing?(x?: any): void;
  placeholderTextColor?: string;
  leftIcon?: boolean;
  iconColor?: string;
  inputPadding?: number;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  iconNameBordered?: string;
  fixedLabelVariant?: TypographyVariants;
  rightIcon?: boolean;
  rightIconName?: string;
} & TextInputProps;

export interface MaskedTextInputType extends TextInputType {
  maskType: TextInputMaskTypeProp;
}

export interface PinInputType {
  onChangeText: (text: string) => void;
  id?: string;
  accessibility?: string;
  keyboardAppearance?: 'default' | 'light' | 'dark';
  caption?: string;
  value?: string;
  onFulfill?(text: string): void;
  onBackspace?(): void;
  password?: boolean;
  autoFocus?: boolean;
  editable?: boolean;
  animated?: boolean;
  centered?: boolean;
  restrictToNumbers?: boolean;
  iconSize?: number;
  cellSpacing?: number;
  codeLength?: number;
  cellSize?: number;
  contrast?: boolean;
  placeholder?: string;
  error?: string | boolean;
  mask?: string | JSX.Element;
  maskDelay?: number;
  cellStyle?: any;
  cellStyleFocused?: any;
  textStyle?: any;
  textStyleFocused?: any;
  wrapperStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
}
