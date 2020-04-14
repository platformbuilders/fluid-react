import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

export const CustomTouchable = styled((props) => (
  <StylesProvider injectFirst>
    <ButtonBase {...props} />
  </StylesProvider>
))``;
