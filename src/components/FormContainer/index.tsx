import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormBehavior } from '~/utils/modules';
import { Wrapper } from './styles';
import { ThemeContext } from '../ThemeContext';

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
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default FormContainer;
