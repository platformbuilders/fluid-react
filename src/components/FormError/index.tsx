import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorText } from './styles';
import { ThemeContext } from '../ThemeContext';

interface Props {
  centered?: boolean;
  error?: string | string[] | boolean;
  style?: object[];
}

const FormError: FC<Props> = ({
  error = '',
  centered = false,
  children,
  style,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        {error && (
          <ErrorText centered={centered} style={style}>
            {error}
          </ErrorText>
        )}
      </>
    </ThemeProvider>
  );
};

export default FormError;
