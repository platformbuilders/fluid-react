import React, { FC } from 'react';
import { Wrapper } from './styles';

const Paper: FC = ({ children, ...rest }): JSX.Element => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Paper;
