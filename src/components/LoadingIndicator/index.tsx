import React, { FC } from 'react';
import { LoadingType } from '../../types';
import { Indicator, smallSize, largeSize } from './style';

const Loading: FC<LoadingType> = ({
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
