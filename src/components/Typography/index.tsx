import { FC } from 'react';
import { TypographyType } from '../../types';
import { CustomTypography } from './styles';

const Typography: FC<TypographyType> = ({
  className,
  variant,
  children,
  ...rest
}) => (
  <CustomTypography className={className} variant={variant} {...rest}>
    {children}
  </CustomTypography>
);

export default Typography;
