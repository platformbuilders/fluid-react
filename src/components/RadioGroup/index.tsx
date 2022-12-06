import { FC } from 'react';
import { RadioGroupProps } from '../../types';
import { StyledRadioGroup } from './styles';

const RadioGroup: FC<RadioGroupProps> = ({ className, ...rest }) => {
  return <StyledRadioGroup className={className} {...rest} />;
};

export default RadioGroup;
