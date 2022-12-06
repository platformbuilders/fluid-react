import { Autocomplete as DefaultAutocomplete } from '@material-ui/lab';
import { PropsAutocomplete } from '../../types';

const Autocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  className,
  ...rest
}: PropsAutocomplete<T, Multiple, DisableClearable, FreeSolo>): JSX.Element => {
  return <DefaultAutocomplete className={className} {...rest} />;
};

export default Autocomplete;
