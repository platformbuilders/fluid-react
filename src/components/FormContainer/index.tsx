import React from 'react';
import { FormBehavior } from '~/utils/modules';
import { Wrapper } from './styles';

interface Props {
  children: any;
  validationSchema: any;
  initialValues: object;
  onSubmit(values: any, actions: any): any;
  validateOnChange?: boolean;
  enableReinitialize?: boolean;
  style?: any;
}

const FormContainer: React.FC<Props> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
  validateOnChange = false,
  enableReinitialize = false,
  style = [{}],
}) => (
  <Wrapper style={style}>
    <FormBehavior
      enableReinitialize={enableReinitialize}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {children}
    </FormBehavior>
  </Wrapper>
);

export default FormContainer;
