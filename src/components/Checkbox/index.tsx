import { CSSProperties, FC } from 'react';

import FormError from '../FormError';

import { Check, CheckboxRoot, Label, Wrapper } from './styles';

export type CheckboxProps = {
  onChange?(value: any): void;
  error?: string | boolean | undefined;
  label?: string;
  checked?: boolean;
  name?: string;
  id?: string;
  style?: CSSProperties;
};

const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  name,
  error,
  style,
}): JSX.Element => (
  <Wrapper>
    <FormError error={error}>
      <CheckboxRoot htmlFor={id} style={style}>
        <Check
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <Label>{label}</Label>
      </CheckboxRoot>
    </FormError>
  </Wrapper>
);

export default Checkbox;
