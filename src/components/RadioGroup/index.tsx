import { RadioGroupProps } from '../../types';
import { StyledRadioGroup } from './styles';

const RadioGroup = ({ className, ...rest }: RadioGroupProps) => {
  return <StyledRadioGroup className={className} {...rest} />;
};

export default RadioGroup;
