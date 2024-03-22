import { CSSProperties, ChangeEvent, FC, useEffect, useState } from 'react';

import { Input, Label, Wrapper } from './styles';

export type Props = {
  id: string;
  value: string;
  label: string;
  group: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
  checked?: boolean;
};

const Radio: FC<Props> = ({
  onChange,
  id,
  value,
  label,
  group,
  style,
  disabled = false,
  checked = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(event);
  };

  useEffect(() => {
    setInternalChecked(checked);
  }, [checked]);

  return (
    <Wrapper disabled={!!disabled} style={style}>
      <Input
        onChange={handleOnChange}
        id={id}
        value={value}
        name={group}
        type="radio"
        disabled={disabled}
        checked={internalChecked}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default Radio;
