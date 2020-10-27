import { FC } from 'react';
import { DatePickerProps } from 'react-native-datepicker';
interface Props {
    value?: string;
    label?: string;
    error?: string;
    cancelBtnText?: string;
    testID?: string;
    accessibilityLabel?: string;
    confirmBtnText?: string;
    mode: DatePickerProps['mode'];
    androidMode: DatePickerProps['androidMode'];
    onDateChange?(x: string): void;
    maxDate?: string;
    editable?: boolean;
    locale: string;
    format: string;
    dark?: boolean;
    status?: string;
    id: string;
    accessibility: string;
}
declare const DatePickerInput: FC<Props>;
export default DatePickerInput;
//# sourceMappingURL=index.d.ts.map