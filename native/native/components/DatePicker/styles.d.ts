import { Animated } from 'react-native';
import DefaultDatePicker, { DatePickerCustomStylesProps } from 'react-native-datepicker';
export declare const LABEL_UPPER_STYLE: {
    top: number;
    fontSize: number;
};
export declare const LABEL_LOWER_STYLE: {
    top: number;
    fontSize: number;
};
interface TextProps {
    dark?: boolean;
    error?: string;
    isPlaceholder?: boolean;
}
export declare const TextLabel: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, TextProps, never>;
export declare const Label: Animated.AnimatedComponent<import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, TextProps, never>>;
interface DatePickerProps {
    customStyles?: DatePickerCustomStylesProps;
    dark?: boolean;
    editable: boolean;
}
export declare const DatePicker: import("styled-components").StyledComponent<typeof DefaultDatePicker, any, DatePickerProps, never>;
export declare const BottomLine: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {
    dark: any;
}, never>;
export declare const DatePickerStyles: DatePickerCustomStylesProps;
export declare const DatePickerStylesDark: DatePickerCustomStylesProps;
export {};
//# sourceMappingURL=styles.d.ts.map