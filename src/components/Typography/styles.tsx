import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

export const CustomTypography = styled((props) => (
  <StylesProvider injectFirst>
    <Typography {...props} />
  </StylesProvider>
))``;
