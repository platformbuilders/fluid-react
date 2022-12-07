import { RadioProps } from '../../types';
import { StyledRadio } from './styles';

const Radio = ({ className, ...rest }: RadioProps) => {
  return <StyledRadio className={className} {...rest} />;
};

export default Radio;
