import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const brandPrimaryMain = getTheme('brand.primary.main');

export const Input = styled(TextField)`
  & label {
    font-size: 1em;
  }
  & label.Mui-focused {
    color: ${brandPrimaryMain};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${brandPrimaryMain};
  }
`;

export const InputWrapper = styled.div`
  flex-direction: column;
`;
