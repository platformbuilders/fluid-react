import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Paper: FC<Props> = ({ className, children, ...rest }): JSX.Element => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default Paper;
