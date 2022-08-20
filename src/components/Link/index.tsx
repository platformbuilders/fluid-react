import { FC } from 'react';

import { LinkProps } from '../../types/Link';
import { CustomLink } from './styles';

const Link: FC<LinkProps> = ({ onPress, children, ...rest }) => {
  return (
    <CustomLink onClick={onPress} {...rest}>
      {children}
    </CustomLink>
  );
};

export default Link;
