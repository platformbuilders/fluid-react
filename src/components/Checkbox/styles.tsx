import styled from 'styled-components';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const brandPrimaryMain = getTheme('brand.primary.main');
const successMain = getTheme('success.main');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const ColoredCheckbox = styled((props) => (
  <Checkbox
    color="default"
    checked={props.checked}
    onChange={props.onChange}
    {...props}
  />
))`
  color: ${brandPrimaryMain};
  & .Mui-checked {
    color: ${successMain};
  }
`;

export const StyledCheckbox = styled((props) => (
  <FormControlLabel
    control={
      <ColoredCheckbox
        checked={props.checked}
        onChange={props.onChange}
        {...props}
      />
    }
    label={props.label}
  />
))``;
