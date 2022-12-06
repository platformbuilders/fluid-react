import { FC } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { Item, MaterialSelect, Wrapper } from './styles';

type ValuesProps = {
  value: string | number;
  label: string;
};

type Props = {
  className?: string;
  onChange(value: any): void;
  error?: string | string[];
  label?: string;
  selectedValue?: string | string[] | number | number[];
  values: ValuesProps[];
  id?: string;
};

const Select: FC<Props> = ({
  className,
  onChange,
  error = '',
  label = '',
  selectedValue,
  values,
  id,
  ...rest
}) => (
  <Wrapper className={className} error={error !== ''} {...rest}>
    <InputLabel>{label}</InputLabel>
    <MaterialSelect
      id={id}
      value={selectedValue}
      onChange={(event: any): any => onChange(event.target.value)}
      {...rest}
    >
      {values.map((item) => (
        <Item
          id={id && `${id}-option-${item.value}`}
          key={item.value}
          value={item.value}
          {...rest}
        >
          {item.label}
        </Item>
      ))}
    </MaterialSelect>
    <FormHelperText>{error}</FormHelperText>
  </Wrapper>
);

export default Select;
