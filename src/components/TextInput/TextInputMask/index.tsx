import ReactInputMask from 'react-input-mask';
import { TextField as TextInput } from '@material-ui/core';
import { TextInputType } from '../../../types';

// import { Input as TextInput } from '../styles';

enum Mask {
  cep = '99999-999',
  cpf = '999.999.999-99',
  cnpj = '99.999.999/9999-99',
  birthdate = '99/99/9999',
  phone = '(99) 9999-9999',
  cellphone = '(99) 99999-9999',
}

type Props = Partial<TextInputType & { maxLength: number }>;

const TextInputMask = ({
  mask,
  maskType = '',
  onChange,
  onBlur,
  onFocus,
  inputProps,
  error,
  variant = 'standard',
  style = {},
  ...rest
}: Props) => {
  const maskOption = Mask[maskType] || mask;

  return (
    <ReactInputMask
      mask={maskOption}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...rest}
    >
      <TextInput
        margin="normal"
        error={!!error}
        inputProps={inputProps}
        variant={variant}
        style={style}
      />
    </ReactInputMask>
  );
};

export default TextInputMask;
