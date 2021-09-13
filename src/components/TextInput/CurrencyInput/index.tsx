import React, { ChangeEvent, FC, FocusEvent } from 'react';
import MaskedInput from 'react-text-mask';
import { InputVariants } from 'src';
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
  onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: ((e: FocusEvent<HTMLInputElement>) => void) | undefined;
  onFocus?: ((e: FocusEvent<HTMLInputElement>) => void) | undefined;
  variant?: InputVariants;
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
  onBlur,
  onFocus,
  value,
  variant = 'standard',
}) => {
  const currencyMask = createNumberMask(defaultMaskOptions);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChangeText && event.target.value) {
      onChangeText({
        ...event,
        target: { ...event.target, value: toOnlyNumbers(event.target.value) },
      });
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
          onBlur={onBlur}
          onFocus={onFocus}
          render={(ref, props) => (
            <Input ref={ref} variant={variant} error={error} {...props} />
          )}
        />
        <Bar className="bar" error={error} />
        <Label error={error}>{label}</Label>
      </Wrapper>
    </FormError>
  );
};

export default CurrencyInputComponent;
