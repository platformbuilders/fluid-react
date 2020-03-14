import React, { FC } from 'react';
import { ErrorText } from './styles';

const warnBoolean = (): void =>
  // eslint-disable-next-line no-console
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
  if (error && typeof error === 'boolean') warnBoolean();
  return (
    <>
      {children}
      {error && typeof error === 'string' ? (
        <ErrorText centered={centered} style={style} {...rest}>
          {error}
        </ErrorText>
      ) : null}
    </>
  );
};

export default FormError;
