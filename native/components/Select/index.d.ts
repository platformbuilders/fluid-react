import { FC } from 'react';
declare type ValuesProps = {
    value: string | number;
    label: string;
};
declare type Props = {
    onChange(value: any): void;
    error?: string | string[];
    label?: string;
    selectedValue?: string[] | number;
    values: ValuesProps[];
};
declare const Select: FC<Props>;
export default Select;
//# sourceMappingURL=index.d.ts.map