import { FC } from 'react';
import { TypographyType } from '../../types';
import { Text } from './styles';

const Typography: FC<TypographyType> = ({ variant, children, ...rest }) => (
  <Text variant={variant} {...rest}>
    {children}
  </Text>
);

export default Typography;
