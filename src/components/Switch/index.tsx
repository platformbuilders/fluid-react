import styled from 'styled-components';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitchProps } from '../../types';
import { getBackgroundColor, getHoverColor } from '../../utils';

export default styled(({ labelPlacement, label, ...rest }) => (
  <FormControlLabel
    control={<Switch {...rest} />}
    labelPlacement={labelPlacement}
    label={label}
  />
))<SwitchProps>`
  &.MuiSwitch-switchBase.Mui-checked {
    color: ${getBackgroundColor};
    &:hover {
      background-color: ${getHoverColor};
    }
  }

  &.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${getBackgroundColor};
  }
`;
