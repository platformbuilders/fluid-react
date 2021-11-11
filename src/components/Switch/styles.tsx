import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitchProps } from '../../types';
import { getBackgroundColor } from '../../utils/helpers/color';

export const StyledSwitch = styled(({ labelPlacement, label, ...rest }) => (
  <FormControlLabel
    control={<Switch {...rest} />}
    labelPlacement={labelPlacement}
    label={label}
  />
))<SwitchProps>((props) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: getBackgroundColor(props),
    '&:hover': {
      backgroundColor: getBackgroundColor(props) + '70',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: getBackgroundColor(props),
  },
}));