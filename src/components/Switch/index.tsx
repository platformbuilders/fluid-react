import React, { FC } from 'react';
import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch: FC<SwitchProps> = ({ labelPlacement = 'end', ...rest }) => {
  return <StyledSwitch labelPlacement={labelPlacement} {...rest} />;
};

export default Switch;
