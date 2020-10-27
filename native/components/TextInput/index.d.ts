import { FC } from 'react';
declare type Props = {
    mask?: string;
    maskType?: string;
    label?: string;
    error?: string | boolean;
    placeholder?: string;
    fullWidth?: boolean;
    name: string;
    id?: string;
    type: string;
    value: string | number | string[] | undefined;
    autoFocus?: boolean;
    onChange?: (value: any) => void;
    onBlur?: (e: any) => void;
};
declare const TextInput: FC<Props>;
export default TextInput;
//# sourceMappingURL=index.d.ts.map