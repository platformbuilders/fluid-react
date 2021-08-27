import React from 'react';
import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { ButtonType } from '../../types';
import { getTheme } from '../../utils/helpers';

const brandPrimaryMain = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondaryMain = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');

const getTextColor = (props: ButtonType) => {
  return props.secondary
    ? brandSecondaryContrast(props)
    : brandPrimaryContrast(props);
};

const getBackgroundColor = (props: ButtonType) => {
  return props.secondary ? brandSecondaryMain(props) : brandPrimaryMain(props);
};

export const StyledButton = styled((props) => <Button {...props} />)`
  min-width: 155px;
  border-radius: 50px;
  padding: 12px;
  color: ${getTextColor};
  border: 0;
  background: ${getBackgroundColor};
`;

export const LoadingIndicator = styled((props) => (
  <CircularProgress {...props} secondary={undefined} size={20} />
))`
  color: ${getTextColor};
`;
