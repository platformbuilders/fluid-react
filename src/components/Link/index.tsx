import { FC } from 'react';
import { CustomLink } from './styles';

const Link: FC<any> = ({ onPress, children, ...rest }) => {
  return (
    <CustomLink onClick={onPress} {...rest}>
      {children}
    </CustomLink>
  );
};

export default Link;
