import React, { FC } from 'react';
import { ErrorText } from './styles';

interface Props {
  error: string;
}
const FormError: FC<Props> = ({ children, error, ...rest }): JSX.Element => (
  <>
    {children}
    <ErrorText {...rest}>{error}</ErrorText>
  </>
);
export default FormError;
