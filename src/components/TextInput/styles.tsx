import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const primaryMain = getTheme('primary.main');

export const Input = styled(TextField)`
  border-color: red;
  & label {
    font-size: 1em;
  }
  & label.Mui-focused {
    color: ${primaryMain};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${primaryMain};
  }
`;

export const InputWrapper = styled.div`
  flex-direction: column;
`;
