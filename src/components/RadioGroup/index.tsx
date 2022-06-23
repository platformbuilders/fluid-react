import { VFC } from 'react';
import { RadioGroupProps } from '../../types';
import { StyledRadioGroup } from './styles';

const RadioGroup: VFC<RadioGroupProps> = (props) => {
  return <StyledRadioGroup {...props} />;
};

export default RadioGroup;
