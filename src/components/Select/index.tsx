import React, { FC } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { Wrapper, MaterialSelect, Item } from './styles';

type ValuesProps = {
  value: string | number;
  label: string;
};

type Props = {
  onChange(value: any): void;
  error?: string | string[];
  label?: string;
  selectedValue?: string[] | number;
  values: ValuesProps[];
};

const Select: FC<Props> = ({
  onChange,
  error = '',
  label = '',
  selectedValue,
  values,
  ...rest
}) => (
  <Wrapper error={error !== ''} {...rest}>
    <InputLabel>{label}</InputLabel>
    <MaterialSelect
      value={selectedValue}
      onChange={(event: any): any => onChange(event.target.value)}
      {...rest}
    >
      {values.map((item) => (
        <Item key={item.value} value={item.value} {...rest}>
          {item.label}
        </Item>
      ))}
    </MaterialSelect>
    <FormHelperText>{error}</FormHelperText>
  </Wrapper>
);
export default Select;
