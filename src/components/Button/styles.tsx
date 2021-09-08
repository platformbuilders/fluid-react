import React from 'react';
import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { ButtonType } from '../../types';
import { getTheme, ifStyle } from '../../utils/helpers';

const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandTertiary = getTheme('brand.tertiary.main');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccent = getTheme('brand.accent.main');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoMain = getTheme('info.main');
const infoContrast = getTheme('info.contrast');
const dangerMain = getTheme('danger.main');
const dangerContrast = getTheme('danger.contrast');
const warningMain = getTheme('warning.main');
const warningContrast = getTheme('warning.contrast');
const isFlat = ifStyle('flat');
const hasBorder = ifStyle('hasBorder');

const getBackgroundColor = (props: ButtonType): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.variant) {
    case 'primary':
      return brandPrimary(props);
    case 'secondary':
      return brandSecondary(props);
    case 'tertiary':
      return brandTertiary(props);
    case 'accent':
      return brandAccent(props);
    case 'info':
      return infoMain(props);
    case 'warning':
      return warningMain(props);
    case 'danger':
      return dangerMain(props);
    default:
      return brandPrimary(props);
  }
};

const getTextColor = (props: ButtonType): string => {
  if (props.disabled) {
    return brandPrimaryContrast(props);
  }
  switch (props.variant) {
    case 'primary':
      return brandPrimaryContrast(props);
    case 'secondary':
      return brandSecondaryContrast(props);
    case 'tertiary':
      return brandTertiaryContrast(props);
    case 'accent':
      return brandAccentContrast(props);
    case 'danger':
      return dangerContrast(props);
    case 'info':
      return infoContrast(props);
    case 'warning':
      return warningContrast(props);
    default:
      return brandPrimaryContrast(props);
  }
};
export const StyledButton = styled((props) => (
  <Button {...props} secondary={undefined} />
))`
  &.MuiButton-root {
    background-color: ${isFlat('transparent', getBackgroundColor)};
    min-width: 155px;
    border-radius: 50px;
    padding: 12px;
    color: ${isFlat(getBackgroundColor, getTextColor)};
    border: ${hasBorder(1, 0)}px solid ${getBackgroundColor};
    :hover {
      background: ${isFlat('transparent', getBackgroundColor)};
    }
  }
`;

export const LoadingIndicator = styled((props) => (
  <CircularProgress {...props} size={20} />
))`
  &.MuiCircularProgress-root {
    color: ${getTextColor};
  }
`;
