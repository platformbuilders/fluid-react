import React, { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};
const Paper: FC<Props> = ({ children, ...rest }): JSX.Element => (
  <Wrapper {...rest}>{children}</Wrapper>
);
export default Paper;
