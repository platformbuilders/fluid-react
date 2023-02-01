import { FC } from 'react';
import { FormError } from '..';
import { StyledCheckbox, Wrapper } from './styles';

type Props = {
  onChange(value: any): void;
  error?: string | boolean | undefined;
  label: string;
  checked: boolean;
  name: string;
  className?: string;
};

const Checkbox: FC<Props> = ({
  checked,
  onChange,
  label,
  name,
  error,
  className,
}): JSX.Element => (
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
