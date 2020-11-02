import React, { FC } from 'react';
import { LoadingType } from '../../types';
import { Indicator, smallSize, largeSize } from './style';

const Loading: FC<LoadingType> = ({
  large = false,
  contrast = false,
  variant = 'circular',
  ...rest
}) => (
  <Indicator
    testID="loading"
    accessibilityLabel="Aguarde"
    variant={variant}
    contrast={contrast}
    style={large ? largeSize : smallSize}
    {...rest}
  />
);

export default Loading;
