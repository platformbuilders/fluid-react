import React, { ReactNode, FC } from 'react';
import { ChildrenWrapper, Constrain } from './styles';

type Props = {
  children: ReactNode;
};
const ScheneWrapper: FC<Props> = ({ children, ...rest }): JSX.Element => (
  <ChildrenWrapper {...rest}>
    <Constrain>{children}</Constrain>
  </ChildrenWrapper>
);

export default ScheneWrapper;
