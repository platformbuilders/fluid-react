import React, { FC } from 'react';
import { RadioProps } from '../../types';
import { StyledRadio } from './styles';

const Radio: FC<RadioProps> = (props) => {
  return <StyledRadio {...props} />;
};

export default Radio;
