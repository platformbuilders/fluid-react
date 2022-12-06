import { FC } from 'react';
import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch: FC<SwitchProps> = ({ className, ...rest }) => {
  return <StyledSwitch className={className} {...rest} />;
};

export default Switch;
