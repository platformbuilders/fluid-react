import React, { FC } from 'react';
import { RadioGroupProps } from '../../types';
import { StyledRadioGroup } from './styles';

const RadioGroup: FC<RadioGroupProps> = (props) => {
  return <StyledRadioGroup {...props} />;
};

export default RadioGroup;
