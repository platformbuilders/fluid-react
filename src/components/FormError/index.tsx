import React, { useContext } from 'react';
import { ErrorText } from './styles';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from 'styled-components';

type Props = {
  error: string | boolean | undefined;
  children?: JSX.Element | JSX.Element[];
  style?: object[];
};

const FormError: React.FC<Props> = ({ error = '', children, style }) => {
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
