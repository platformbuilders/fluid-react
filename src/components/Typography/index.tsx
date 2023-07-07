import { FC } from 'react';
import { TypographyTypeProps } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyTypeProps> = ({
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  ...rest
}) => (
  <Text variant={variant} $lineHeightVariant={lineHeightVariant} {...rest}>
    {children}
  </Text>
);

export default Typography;
