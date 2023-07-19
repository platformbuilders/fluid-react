import { ChangeEvent, FC } from 'react';

import { Input, Label, Wrapper } from './styles';

export type Props = {
  id: string;
  label: string;
  group: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Radio: FC<Props> = ({ onChange, id, label, group }) => (
  <Wrapper>
    <Input onChange={onChange} id={id} name={group} type="radio" />
    <Label htmlFor={id}>{label}</Label>
  </Wrapper>
);

export default Radio;
