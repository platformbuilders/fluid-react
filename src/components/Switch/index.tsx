import { ChangeEvent, FC } from 'react';
import { Input, Label, Wrapper } from './styles';

export type Props = {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const Switch: FC<Props> = ({ id, label, onChange, checked = false }) => (
  <Wrapper>
    <Input type="checkbox" id={id} onChange={onChange} />
    <Label htmlFor={id} checked={checked}>
      {label}
    </Label>
  </Wrapper>
);

export default Switch;
