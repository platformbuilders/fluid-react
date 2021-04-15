import React, { FC } from 'react';
import { ErrorText } from './styles';

const warnBoolean = (): void =>
  // eslint-disable-next-line no-console
  console.warn(
    "@platformbuilders/react-native-ui: received a truthy boolean error instead of string, which won't be rendered.",
  );

type Props = {
  centered?: boolean;
  large?: boolean;
  error?: string | string[] | boolean;
  id?: string;
  accessibility?: string;
};

const FormError: FC<Props> = ({
  id = 'form_error',
  accessibility,
  error = '',
  centered = false,
  large = false,
  children,
  ...rest
}) => {
  if (error && typeof error === 'boolean') warnBoolean();
  return (
    <>
      {children}
      {error && typeof error === 'string' ? (
        <ErrorText
          centered={centered}
          large={large}
          testID={`error_${id}`}
          accessibility={`Erro ${accessibility || error}`}
          accessibilityLabel={`Erro ${accessibility || error}`}
          {...rest}
        >
          {error}
        </ErrorText>
      ) : null}
    </>
  );
};

export default FormError;
