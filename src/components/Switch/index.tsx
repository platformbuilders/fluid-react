import React, { FC } from 'react';
import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch: FC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};

export default Switch;
