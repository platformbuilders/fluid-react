import { FC, useState } from 'react';
import { Input, Label, Wrapper } from './styles';

type Props = {
  id: string;
  label: string;
};

const Switch: FC<Props> = ({ id, label }) => {
  const [checked, setChecked] = useState(false);

  const handleChangeChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Input type="checkbox" id={id} onChange={handleChangeChecked} />
      <Label htmlFor={id} checked={checked}>
        {label}
      </Label>
    </Wrapper>
  );
};

export default Switch;
