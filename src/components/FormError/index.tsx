import React, { FC } from 'react';
import { ErrorText } from './styles';

export type Props = {
  children?: React.ReactNode;
  error: string | boolean | undefined;
};

const FormError: FC<Props> = ({ children, error, ...rest }): JSX.Element => {
  return (
    <>
      {children}
      {error && typeof error === 'string' ? (
        <ErrorText {...rest}>{error}</ErrorText>
      ) : null}
    </>
  );
};

export default FormError;
