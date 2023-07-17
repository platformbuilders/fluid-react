import { FC } from 'react';
import { Item, StyledSelect, Wrapper } from './styles';

type ValuesProps = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  onChange(value: any): void;
  error?: string | string[];
  label?: string;
  selectedValue?: string | string[] | number | number[];
  values: ValuesProps[];
  id?: string;
};

const Select: FC<SelectProps> = ({
  onChange,
  error = '',
  label = '',
  selectedValue,
  values,
  id,
  ...rest
}) => (
  <Wrapper {...rest}>
    <label>{label}</label>
    <StyledSelect
      id={id}
      onChange={(event: any): any => onChange(event.target.value)}
      {...rest}
    >
      {values.map((item) => (
        <Item
          id={id && `${id}-option-${item.value}`}
          key={item.value}
          {...rest}
        >
          {item.label}
        </Item>
      ))}
    </StyledSelect>
    <p>{error}</p>
  </Wrapper>
);
export default Select;
