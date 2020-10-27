/// <reference types="react" />
import { RNCamera } from 'react-native-camera';
declare type WrapperProps = {
    size: number;
    disabled: boolean;
    showBorder: boolean;
    borderWidth?: number;
    borderColor?: string;
};
export declare const Wrapper: import("styled-components").StyledComponent<import("react").FC<import("../..").TouchableType>, any, WrapperProps, never>;
declare type IconWrapperProps = {
    size: number;
};
export declare const UploadIconWrapper: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, IconWrapperProps, never>;
export declare const UploadIcon: import("styled-components").StyledComponent<import("react").FC<import("../..").IconType>, any, {
    name: "camera";
}, "name">;
export declare const CameraView: import("styled-components").StyledComponent<typeof RNCamera, any, {
    size: number;
}, never>;
export {};
//# sourceMappingURL=styles.d.ts.map