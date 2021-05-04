/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import { Text } from './styles';

type Props = {
  appVersion?: string;
  buildVersion?: string;
};

const DisplayVersion: FC<Props> = ({ appVersion, buildVersion }) => (
  <Text accessibility="display-version">
    Versão {appVersion}
    {!!buildVersion && '/'}
    {buildVersion}
  </Text>
);

export default DisplayVersion;
