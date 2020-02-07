import React from 'react';
import { ErrorText } from './styles';

type Props = {
  error: string | boolean | undefined;
  children?: JSX.Element | JSX.Element[];
  style?: object[];
};

const FormError: React.FC<Props> = ({ error = '', children, style }) => (
  <>
    {children}
    <ErrorText style={style}>{error}</ErrorText>
  </>
);

export default FormError;
