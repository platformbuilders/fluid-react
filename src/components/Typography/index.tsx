import { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({
  className,
  variant,
  children,
  ...rest
}) => (
  <Text variant={variant} className={className} {...rest}>
    {children}
  </Text>
);

export default Typography;
