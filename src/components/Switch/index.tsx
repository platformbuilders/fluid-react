import { VFC } from 'react';
import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch: VFC<SwitchProps> = ({ className, ...rest }) => {
  return <StyledSwitch className={className} {...rest} />;
};

export default Switch;
