import { VFC } from 'react';
import { RadioGroupProps } from '../../types';
import { StyledRadioGroup } from './styles';

const RadioGroup: VFC<RadioGroupProps> = ({ className, ...rest }) => {
  return <StyledRadioGroup className={className} {...rest} />;
};

export default RadioGroup;
