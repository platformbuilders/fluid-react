import React, { FC } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormError } from '../..';
import { toOnlyNumbers } from '../../../utils/helpers';

import { Bar, Input, Label, Wrapper } from './styles';

type Props = {
  id: string;
  name?: string;
  label?: string;
  value: string | number | string[] | undefined;
  error?: string | boolean;
  onChangeText?: (value: any) => void;
};

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
};

const CurrencyInputComponent: FC<Props> = ({
  error,
  label,
  id,
  name,
  onChangeText,
  value,
}) => {
  const currencyMask = createNumberMask(defaultMaskOptions);

  const handleChange = (event: any) => {
    if (onChangeText && event.target.value) {
      onChangeText(toOnlyNumbers(event.target.value));
    }
  };

  return (
    <FormError error={error}>
      <Wrapper>
        <MaskedInput
          mask={currencyMask}
          placeholder="R$ 0,00"
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          render={(ref, props) => <Input ref={ref} error={error} {...props} />}
        />
        <Bar className="bar" error={error} />
        <Label error={error}>{label}</Label>
      </Wrapper>
    </FormError>
  );
};

export default CurrencyInputComponent;
