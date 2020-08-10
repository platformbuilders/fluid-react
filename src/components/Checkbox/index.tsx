import React, { FC } from 'react';
import { FormError } from '..';
import { Wrapper, StyledCheckbox } from './styles';

type Props = {
  onChange(value: any): void;
  error?: string | boolean | undefined;
  label: string;
  checked: boolean;
  name: string;
};

const Checkbox: FC<Props> = ({
  checked,
  onChange,
  label,
  name,
  error,
}): JSX.Element => (
  <Wrapper>
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
