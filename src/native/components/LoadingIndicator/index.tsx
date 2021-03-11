import React, { FC } from 'react';
import { LoadingType } from '../../types';
import { Indicator, smallSize, largeSize } from './style';

const Loading: FC<LoadingType> = ({
  large = false,
  contrast = false,
  variant = 'circular',
  accessibility,
  ...rest
}) => (
  <Indicator
    testID={accessibility || 'loading'}
    accessibilityLabel={accessibility || 'Aguarde'}
    variant={variant}
    contrast={contrast}
    style={large ? largeSize : smallSize}
    {...rest}
  />
);

export default Loading;
