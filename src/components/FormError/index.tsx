import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorText } from './styles';
import { ThemeContext } from '../ThemeContext';

type Props = {
  error: string | boolean | undefined;
  children?: JSX.Element | JSX.Element[];
  style?: object[];
};

const FormError: FC<Props> = ({ error = '', children, style }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <ErrorText style={style}>{error}</ErrorText>
      </>
    </ThemeProvider>
  );
};

export default FormError;
