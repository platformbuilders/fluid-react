import { VFC } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { Item, MaterialSelect, Wrapper } from './styles';

type ValuesProps = {
  value: string | number;
  label: string;
};

type Props = {
  onChange(value: any): void;
  error?: string | string[];
  label?: string;
  selectedValue?: string | string[] | number | number[];
  values: ValuesProps[];
  id?: string;
  className?: string;
  classNameItem?: string;
};

const Select: VFC<Props> = ({
  onChange,
  error = '',
  label = '',
  selectedValue,
  values,
  id,
  className,
  classNameItem,
  ...rest
}) => (
  <Wrapper error={error !== ''} {...rest}>
    <InputLabel>{label}</InputLabel>
    <MaterialSelect
      id={id}
      value={selectedValue}
      onChange={(event: any): any => onChange(event.target.value)}
      className={className}
      {...rest}
    >
      {values.map((item) => (
        <Item
          id={id && `${id}-option-${item.value}`}
          key={item.value}
          value={item.value}
          {...rest}
          className={classNameItem}
        >
          {item.label}
        </Item>
      ))}
    </MaterialSelect>
    <FormHelperText>{error}</FormHelperText>
  </Wrapper>
);
export default Select;
