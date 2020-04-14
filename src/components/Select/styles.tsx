import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const Wrapper = styled((props) => (
  <StylesProvider injectFirst>
    <FormControl {...props} />
  </StylesProvider>
))``;

export const MaterialSelect = styled((props) => (
  <StylesProvider injectFirst>
    <Select {...props} />
  </StylesProvider>
))`
  .MuiSelect-select {
    width: calc(100% - 32px) !important;
  }
`;

export const Item = styled((props) => (
  <StylesProvider injectFirst>
    <MenuItem {...props} />
  </StylesProvider>
))`
  .MuiListItem-root {
    width: 100% !important;
  }
`;
