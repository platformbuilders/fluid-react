import { FC } from 'react';
import { TypographyTypeProps } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyTypeProps> = ({
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  as,
  ...rest
}) => (
  <Text
    as={as}
    $variant={variant}
    $lineHeightVariant={lineHeightVariant}
    {...rest}
  >
    {children}
  </Text>
);

export default Typography;
