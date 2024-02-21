import { FC } from 'react';
import { CustomLink } from './styles';

type Props = {
  children: string;
  onPress: () => void;
};

const Link: FC<Props> = ({ onPress, children, ...rest }) => {
  return (
    <CustomLink onClick={onPress} {...rest}>
      {children}
    </CustomLink>
  );
};

export default Link;
