import React, { FC } from 'react';
import { StyledRadio } from './styles';
// import { ColorsVariant } from '../../types';

type Props = {
  id?: string;
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  // variant?: ColorsVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  label?: string;
  labelPlacement?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: FC<Props> = (props) => {
  return <StyledRadio {...props} />;
};

export default Radio;
