import { ChangeEvent, FC, FocusEvent } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { toOnlyNumbers } from '@platformbuilders/helpers';
import { InputVariants } from '../../../types/TextInput';

import { MaskedInput } from './styles';

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
  id,
  name,
  onChangeText,
  onBlur,
  onFocus,
  value,
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
    <MaskedInput
      mask={currencyMask}
      placeholder="R$ 0,00"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default CurrencyInputComponent;
