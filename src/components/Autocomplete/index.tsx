import { Autocomplete as DefaultAutocomplete } from '@material-ui/lab';
import { PropsAutocomplete } from '../../types';

const Autocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  props: PropsAutocomplete<T, Multiple, DisableClearable, FreeSolo>,
): JSX.Element => {
  return <DefaultAutocomplete {...props} />;
};

export default Autocomplete;
