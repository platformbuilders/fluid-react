import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { Button, CircularProgress } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');

export const StyledButton = styled((props) => (
  <StylesProvider injectFirst>
    <Button {...props} secondary={undefined} />
  </StylesProvider>
))`
  min-width: 155px;
  border-radius: 50px;
  padding: 12px;
  color: ${(props) => (props.secondary ? secondaryContrast : primaryContrast)};
  border: 0;
  background: ${(props) => (props.secondary ? secondaryMain : primaryMain)};
  :hover {
    background: ${(props) => (props.secondary ? secondaryMain : primaryMain)};
  }
`;

export const LoadingIndicator = styled((props) => (
  <CircularProgress {...props} secondary={undefined} size={20} />
))`
  color: ${(props) => (props.secondary ? secondaryContrast : primaryContrast)};
`;
