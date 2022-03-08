import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Radio } from '@material-ui/core';
import { RadioProps } from '../../types';
import { getBackgroundColor } from '../../utils/helpers/color';

export const StyledRadio = styled(
  ({ label, labelPlacement, value, ...rest }) => (
    <FormControlLabel
      control={<Radio {...rest} />}
      label={label}
      labelPlacement={labelPlacement}
      value={value}
    />
  ),
)<RadioProps>`
  &.MuiRadio-colorSecondary.Mui-checked {
    color: ${getBackgroundColor} !important;
    &:hover {
      background-color: ${getBackgroundColor}70 !important;
    }
  }

  &.MuiRadio-colorSecondary.Mui-checked + .MuiRadio-track {
    background-color: ${getBackgroundColor} !important;
  }
`;
