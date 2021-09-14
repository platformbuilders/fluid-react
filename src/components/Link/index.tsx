import React from 'react';

import { MouseEventHandler } from 'react-router/node_modules/@types/react';
import { CustomLink } from './styles';

export type LinkProps = {
  onPress: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactChild;
  id?: string;
};

const Link = ({ onPress, children, id, ...props }: LinkProps) => {
  return (
    <CustomLink onClick={onPress} {...props} id={id}>
      {children}
    </CustomLink>
  );
};

export default Link;
