/// <reference types="react" />
import { ButtonVariants } from '../../types';
interface ButtonWrapperProps {
    rounded: boolean;
    variant: ButtonVariants;
    disabled?: boolean;
}
interface TextButtonProps {
    variant: ButtonVariants;
    disabled?: boolean;
}
interface TouchableProps {
    rounded: boolean;
}
export declare const Touchable: import("styled-components").StyledComponent<import("react").FC<import("../../types").TouchableType>, any, TouchableProps, never>;
export declare const ButtonWrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, ButtonWrapperProps, never>;
export declare const TextButton: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, TextButtonProps, never>;
export declare const Loading: import("styled-components").StyledComponent<import("react").FC<import("../../types").LoadingType>, any, {
    variant: "button";
}, "variant">;
export {};
//# sourceMappingURL=styles.d.ts.map