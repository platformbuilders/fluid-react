import { LoadingType } from '../../types';
import { Indicator, largeSize, smallSize } from './style';

const Loading = ({
  large = false,
  contrast = false,
  variant = 'circular',
  accessibility,
  ...rest
}: LoadingType) => (
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
