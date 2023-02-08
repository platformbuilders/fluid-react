import React, { FC } from 'react';
import { isString } from '../../utils/helpers';
import { ErrorText, Wrapper } from './styles';

export type Props = {
  children?: React.ReactNode;
  error: string | boolean | undefined;
  className?: string;
};

const FormError: FC<Props> = ({
  className,
  children,
  error,
  ...rest
}): JSX.Element => {
  const isErrorValid = isString(error);

  return (
    <Wrapper className={className}>
      {children}
      {isErrorValid && <ErrorText {...rest}>{error}</ErrorText>}
    </Wrapper>
  );
};

export default FormError;
