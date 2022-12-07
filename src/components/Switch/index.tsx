import { SwitchProps } from '../../types';
import { StyledSwitch } from './styles';

const Switch = ({ className, ...rest }: SwitchProps) => {
  return <StyledSwitch className={className} {...rest} />;
};

export default Switch;
