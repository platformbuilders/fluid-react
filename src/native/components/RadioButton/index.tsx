import React from 'react';
import If from '../If';
import { Radio, CheckedRadio } from './styles';

type Props = {
  id?: string;
  accessibility: string;
  radioButtonColor?: string;
  checkedRadioButtonColor?: string;
  size?: number;
  internalSize?: number;
  checked?: boolean;
  onPress?(): void;
};

const RadioButton: React.FC<Props> = ({
  id,
  accessibility,
  radioButtonColor,
  checkedRadioButtonColor,
  size = 18,
  internalSize = 13,
  checked = false,
  onPress = () => {},
}) => (
  <Radio
    id={id || accessibility}
    accessibility={accessibility}
    onPress={onPress}
    radioButtonColor={radioButtonColor}
    size={size}
  >
    <If condition={checked}>
      <CheckedRadio
        checkedRadioButtonColor={checkedRadioButtonColor}
        internalSize={internalSize}
      />
    </If>
  </Radio>
);

export default RadioButton;
