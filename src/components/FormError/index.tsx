import React, { FC } from 'react';
import { isString } from '../../utils/helpers';
import { ErrorText } from './styles';

export type Props = {
  className?: string;
  children?: React.ReactNode;
  error: string | boolean | undefined;
};

const FormError: FC<Props> = ({ className, children, error, ...rest }) => {
  const isErrorValid = isString(error);

  return (
    <>
      {children}
      {isErrorValid && (
        <ErrorText className={className} {...rest}>
          {error}
        </ErrorText>
      )}
    </>
  );
};

export default FormError;
