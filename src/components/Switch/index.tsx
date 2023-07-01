import styled from 'styled-components';
import { FormControlLabel, Switch } from '@material-ui/core';
import { SwitchProps } from '../../types';
import { getBackgroundColor } from '../../utils';

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
      background-color: ${getBackgroundColor}70;
    }
  }

  &.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${getBackgroundColor};
  }
`;
