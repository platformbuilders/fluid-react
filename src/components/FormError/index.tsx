import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorText } from './styles';
import { ThemeContext } from '../ThemeContext';

const warnBoolean = (): void =>
  console.warn(
    `@platformbuilders/react-native-ui: received a truthy boolean error instead of string, which won't be rendered.`,
  );

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
  ...rest
}) => {
  const { theme } = useContext(ThemeContext);
  if (error && typeof error === 'boolean') warnBoolean();
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        {error && typeof error === 'string' ? (
          <ErrorText centered={centered} style={style} {...rest}>
            {error}
          </ErrorText>
        ) : null}
      </>
    </ThemeProvider>
  );
};

export default FormError;
