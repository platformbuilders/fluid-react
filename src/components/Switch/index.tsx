import styled from 'styled-components';
import { SwitchProps } from '../../types';
// import { getBackgroundColor, getHoverColor } from '../../utils';

export default styled(({ labelPlacement, label, ...rest }) => (
  <label>{label}</label>
))<SwitchProps>``;
