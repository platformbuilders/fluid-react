import React, { FC } from 'react';
import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteRenderInputParams,
} from '@material-ui/lab';
import { StyledAutocomplete } from './styles';

type Props = {
  id?: string;
  options: any[];
  style?: React.CSSProperties;
  getOptionLabel?: (option: any) => string;
  onChange?: (
    event: React.ChangeEvent<any>,
    value: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any>,
  ) => void;
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
};

const Autocomplete: FC<Props> = ({
  id,
  options,
  style,
  getOptionLabel,
  renderInput,
  onChange,
  ...rest
}) => {
  return (
    <StyledAutocomplete
      id={id}
      options={options}
      style={style}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      renderInput={renderInput}
      {...rest}
    />
  );
};

export default Autocomplete;
