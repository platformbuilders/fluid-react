import { VFC } from 'react';
import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch: VFC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};

export default Switch;
