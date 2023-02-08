import { Autocomplete as DefaultAutocomplete } from '@material-ui/lab';
import { PropsAutocomplete } from '../../types';
import { Wrapper } from './styles';

const Autocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  className,
  ...rest
}: PropsAutocomplete<T, Multiple, DisableClearable, FreeSolo> & {
  className: string;
}): JSX.Element => {
  return (
    <Wrapper className={className}>
      <DefaultAutocomplete {...rest} />
    </Wrapper>
  );
};

export default Autocomplete;
