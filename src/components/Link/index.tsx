import { FC } from 'react';

import { LinkProps } from '../../types/Link';
import { CustomLink } from './styles';

const Link: FC<LinkProps> = ({ className, onPress, children, ...rest }) => {
  return (
    <CustomLink className={className} onClick={onPress} {...rest}>
      {children}
    </CustomLink>
  );
};

export default Link;
