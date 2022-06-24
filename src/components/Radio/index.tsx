import { VFC } from 'react';
import { RadioProps } from '../../types';
import { StyledRadio } from './styles';

const Radio: VFC<RadioProps> = (props) => {
  return <StyledRadio {...props} />;
};

export default Radio;
