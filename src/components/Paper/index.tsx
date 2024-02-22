import React, { FC } from 'react';
import { type ElevationVariants, Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  elevation?: ElevationVariants;
  square?: boolean;
  id?: string;
};

const Paper: FC<Props> = ({ children, ...rest }): JSX.Element => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Paper;
