import { FC } from 'react';
import { isString } from '../../utils/helpers';
import { ErrorText } from './styles';

export type Props = {
  error: string | boolean | undefined;
};

const FormError: FC<Props> = ({ children, error, ...rest }): JSX.Element => {
  const isErrorValid = isString(error);

  return (
    <>
      {children}
      {isErrorValid && <ErrorText {...rest}>{error}</ErrorText>}
    </>
  );
};

export default FormError;
