import { FC } from 'react';
import FormError from '../FormError';
import { StyledCheckbox, Wrapper } from './styles';

export type CheckboxProps = {
  onChange?(value: any): void;
  error?: string | boolean | undefined;
  label?: string;
  checked?: boolean;
  name?: string;
};

const Checkbox: FC<CheckboxProps> = ({ error }): JSX.Element => (
  <Wrapper>
    <FormError error={error}>
      <StyledCheckbox />
    </FormError>
  </Wrapper>
);

export default Checkbox;
