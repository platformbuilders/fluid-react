import { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableType, ButtonVariants } from '../../types';
interface Props extends TouchableType {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    rounded?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    loading?: boolean;
    variant?: ButtonVariants;
}
declare const Button: FC<Props>;
export default Button;
//# sourceMappingURL=index.d.ts.map