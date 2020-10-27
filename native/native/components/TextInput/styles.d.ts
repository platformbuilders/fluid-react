/// <reference types="react" />
import { Animated } from 'react-native';
import { TextInputType } from '../../types';
declare type InputAreaWrapperProps = {
    multiline: boolean;
};
declare type BottomLineProps = {
    contrast: boolean;
    status: string;
};
export declare const LABEL_UPPER_STYLE: {
    top: number;
    fontSize: number;
};
export declare const LABEL_LOWER_STYLE: {
    top: number;
    fontSize: number;
};
declare type WrapperProps = {
    multiline: boolean;
};
export declare const Wrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, WrapperProps, never>;
export declare const InputAreaWrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, InputAreaWrapperProps, never>;
export declare const TextLabel: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, BottomLineProps | TextInputType, never>;
export declare const Label: Animated.AnimatedComponent<import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, BottomLineProps | TextInputType, never>>;
export declare const TextInput: import("styled-components").StyledComponent<typeof import("react-native").TextInput, import("styled-components").DefaultTheme, {
    accessibility: string;
    testID: string;
    textAlign: any;
    selectionColor: string;
    placeholderTextColor: string;
} & TextInputType, "testID" | "selectionColor" | "accessibility" | "placeholderTextColor" | "textAlign">;
export declare const BottomLine: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, BottomLineProps, never>;
declare type IconProps = {
    contrast: boolean;
    error: boolean;
};
export declare const Icon: import("styled-components").StyledComponent<import("react").FC<import("../../types").IconType>, any, {
    color: any;
} & IconProps, "color">;
export {};
//# sourceMappingURL=styles.d.ts.map