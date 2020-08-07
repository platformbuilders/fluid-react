import React, { FC } from 'react';
import { ErrorText } from './styles';

type Props = {
  error: string | boolean | undefined;
};

const FormError: FC<Props> = ({ children, error, ...rest }): JSX.Element => (
  <>
    {children}
    <ErrorText {...rest}>{error}</ErrorText>
  </>
);
export default FormError;
