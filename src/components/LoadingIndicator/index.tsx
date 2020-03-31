import React, { FC } from 'react';
import { Indicator, smallSize, largeSize, LoadingVariants } from './style';

interface Props {
  large?: boolean;
  variant?: LoadingVariants;
}

const Loading: FC<Props> = ({
  large = false,
  variant = 'circular',
  ...rest
}) => (
  <Indicator
    variant={variant}
    style={large ? largeSize : smallSize}
    {...rest}
  />
);

export default Loading;
