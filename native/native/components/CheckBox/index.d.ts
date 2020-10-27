import { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
declare type Props = {
    id: string;
    accessibility: string;
    checked?: boolean;
    label?: string;
    labelBefore?: string;
    error?: string;
    onPress?(): void;
    labelStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    checkBoxColor?: string;
    checkedCheckBoxColor?: string;
    uncheckedCheckBoxColor?: string;
};
declare const CheckboxComponent: FC<Props>;
export default CheckboxComponent;
//# sourceMappingURL=index.d.ts.map