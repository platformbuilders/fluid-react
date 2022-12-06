import { FC } from 'react';
import { RadioProps } from '../../types';
import { StyledRadio } from './styles';

const Radio: FC<RadioProps> = ({ className, ...rest }) => {
  return <StyledRadio className={className} {...rest} />;
};

export default Radio;
