import React, { FC } from 'react';
import { BoxShadowVariants } from 'src/enums';
import { Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  elevation?: keyof typeof BoxShadowVariants;
  square?: boolean;
};

const Paper: FC<Props> = ({ children, ...rest }): JSX.Element => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Paper;
