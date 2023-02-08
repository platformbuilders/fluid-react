import { FC } from 'react';
import { LoadingType } from '../../types';
import { Indicator, Wrapper, largeSize, smallSize } from './style';

const Loading: FC<LoadingType> = ({
  large = false,
  contrast = false,
  variant = 'circular',
  accessibility,
  className,
  ...rest
}) => (
  <Wrapper className={className}>
    <Indicator
      testID={accessibility || 'loading'}
      aria-label={accessibility || 'Aguarde'}
      variant={variant}
      contrast={contrast}
      style={large ? largeSize : smallSize}
      {...rest}
    />
  </Wrapper>
);

export default Loading;
