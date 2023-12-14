import { FC, PropsWithChildren } from 'react';
import { KnownTarget } from 'styled-components/dist/types';
import { TypographyVariants } from '@platformbuilders/theme-toolkit';
import { Text } from './styles';

export type TypographyTypeBase = PropsWithChildren<{
  variant?: TypographyVariants;
  id?: string;
  accessibility?: string;
  numberOfLines?: number;
  as?: KnownTarget;
}>;

export type TypographyTypeProps = TypographyTypeBase & {
  lineHeightVariant?: TypographyVariants;
  className?: string;
};

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
