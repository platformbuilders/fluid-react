import { FormError } from '..';
import { StyledCheckbox, Wrapper } from './styles';

type Props = {
  checked: boolean;
  className?: string;
  error?: string | boolean | undefined;
  label: string;
  name: string;
  onChange(value: any): void;
};

const Checkbox = ({
  className,
  checked,
  onChange,
  label,
  name,
  error,
}: Props) => (
  <Wrapper className={className}>
    <FormError error={error}>
      <StyledCheckbox
        label={label}
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </FormError>
  </Wrapper>
);

export default Checkbox;
