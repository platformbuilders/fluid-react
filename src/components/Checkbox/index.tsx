import { FC } from 'react';
import FormError from '../FormError';
import { StyledCheckbox, Wrapper } from './styles';

export type CheckboxProps = {
  onChange(value: any): void;
  error?: string | boolean | undefined;
  label: string;
  checked: boolean;
  name: string;
};

const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  name,
  error,
}): JSX.Element => (
  <Wrapper>
    <FormError error={error}>
      <StyledCheckbox
        className="fluid-checkbox"
        label={label}
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </FormError>
  </Wrapper>
);

export default Checkbox;
