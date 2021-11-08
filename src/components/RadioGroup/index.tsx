import React, { FC } from 'react';
import { RadioGroupProps } from '@material-ui/core';
import { StyledRadioGroup } from './styles';

const RadioGroup: FC<RadioGroupProps> = (props) => {
  return <StyledRadioGroup {...props} />;
};

export default RadioGroup;
