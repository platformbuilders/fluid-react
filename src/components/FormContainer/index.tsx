import React, { FC } from 'react';
import { Formik } from 'formik';

type Props = {
  validationSchema?: object;
  initialValues: object;
  onSubmit: any;
  validateOnChange?: boolean;
};

const FormContainer: FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  validateOnChange,
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
