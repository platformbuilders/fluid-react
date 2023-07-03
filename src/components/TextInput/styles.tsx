import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { getTheme } from '@platformbuilders/theme-toolkit';

const brandPrimaryMain = getTheme('brand.primary.main');

export const Input = styled(TextField)`
  margin-bottom: 0 !important;
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
