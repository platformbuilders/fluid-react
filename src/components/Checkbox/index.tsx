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
  disabled?: boolean;
  variant?: 'default' | 'primary';
  labelFontWeight?: number;
};

const Checkbox: FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  name,
  error,
  style,
  disabled,
  variant = 'default',
  labelFontWeight,
}): JSX.Element => (
  <Wrapper enabled={!disabled} $variant={variant}>
    <FormError error={error}>
      <CheckboxRoot htmlFor={id} style={style} $variant={variant}>
        <Check
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
          $variant={variant}
        />
        <Label $variant={variant} $fontWeight={labelFontWeight}>
          {label}
        </Label>
      </CheckboxRoot>
    </FormError>
  </Wrapper>
);

export default Checkbox;
