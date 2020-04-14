import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const primaryMain = getTheme('primary.main');

export const Input = styled((props) => (
  <StylesProvider injectFirst>
    <TextField {...props} />
  </StylesProvider>
))`
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
