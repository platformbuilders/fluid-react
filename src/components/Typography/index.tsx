import { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  variant = 'md',
  lineHeightVariant = 'min',
  children,
  ...rest
}) => (
  <Text variant={variant} lineHeightVariant={lineHeightVariant} {...rest}>
    {children}
  </Text>
);

export default Typography;
