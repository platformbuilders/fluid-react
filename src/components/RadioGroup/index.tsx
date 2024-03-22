import { CSSProperties, ChangeEvent, FC, useState } from 'react';

import Radio from '../Radio';
import { Wrapper } from './styles';

type OptionProps = {
  id: string;
  value: string;
  label: string;
  style?: CSSProperties;
};

export type Props = {
  id: string;
  name: string;
  options: OptionProps[];
  defaultValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

const RadioGroup: FC<Props> = ({
  id,
  name,
  options,
  defaultValue,
  onChange,
  disabled,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    onChange(event);
  };

  return (
    <Wrapper id={id}>
      {options.map(({ id, value, label, style }) => (
        <Radio
          key={id}
          id={id}
          value={value}
          label={label}
          style={style}
          group={name}
          disabled={disabled}
          checked={value === internalValue}
          onChange={handleOnChange}
        />
      ))}
    </Wrapper>
  );
};

export default RadioGroup;
