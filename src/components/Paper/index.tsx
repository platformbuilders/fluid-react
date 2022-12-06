import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Paper: FC<Props> = ({ className, children, ...rest }): JSX.Element => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default Paper;
