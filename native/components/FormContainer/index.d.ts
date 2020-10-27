import { FC, ReactNode } from 'react';
import { FormikHelpers, FormikValues } from 'formik';
declare type Props = {
    validateOnChange?: boolean;
    validationSchema?: Record<string, unknown>;
    initialValues: Record<string, unknown>;
    children: ReactNode;
    onSubmit(values: FormikValues, actions: FormikHelpers<Record<string, unknown>>): void;
};
declare const FormContainer: FC<Props>;
export default FormContainer;
//# sourceMappingURL=index.d.ts.map