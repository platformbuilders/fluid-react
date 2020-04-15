import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {};

const Paper: FC<Props> = ({ children, ...rest }): JSX.Element => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Paper;
