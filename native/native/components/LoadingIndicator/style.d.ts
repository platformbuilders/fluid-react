import Animation from 'lottie-react-native';
import { AnimationObject, LoadingVariants } from '../../types';
export declare const circularLoading: ({ theme }: any) => string;
export declare const buttonLoading: ({ theme }: any) => string;
export declare const linearLoading: ({ theme }: any) => string;
interface IndicatorProps {
    variant: LoadingVariants;
    testID: string;
    accessibilitylabel: string;
}
export declare const smallSize: {
    width: number;
    height: number;
};
export declare const largeSize: {
    width: number;
    height: number;
};
export declare const Indicator: import("styled-components").StyledComponent<typeof Animation, any, {
    source: string | AnimationObject | {
        uri: string;
    };
    autoPlay: true;
    loop: true;
} & IndicatorProps, "source" | "autoPlay" | "loop">;
export {};
//# sourceMappingURL=style.d.ts.map