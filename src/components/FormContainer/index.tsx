import { ReactNode, VFC } from 'react';
import { Formik, FormikHelpers, FormikValues } from 'formik';

type Props = {
  validateOnChange?: boolean;
  validationSchema?: Record<string, unknown>;
  initialValues: Record<string, unknown>;
  children: ReactNode;
  onSubmit(
    values: FormikValues,
    actions: FormikHelpers<Record<string, unknown>>,
  ): void;
};

const FormContainer: VFC<Props> = ({
  validateOnChange,
  validationSchema,
  initialValues,
  onSubmit,
  children,
  ...rest
}): JSX.Element => (
  <Formik
    validateOnChange={validateOnChange}
    validationSchema={validationSchema}
    initialValues={initialValues}
    onSubmit={onSubmit}
    {...rest}
  >
    {children}
  </Formik>
);

export default FormContainer;
