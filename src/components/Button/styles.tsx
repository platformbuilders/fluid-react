import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';
import { getTheme, ifStyle } from '../../utils/helpers';
import { getBackgroundColor, getTextColor } from '../../utils/helpers/color';

const spacingSm = getTheme('spacing.sm');
const borderRadiusMax = getTheme('borderRadius.max');
const isFlat = ifStyle('flat');
const hasBorder = ifStyle('hasBorder');

export const StyledButton = styled((props) => (
  <Button {...props} secondary={undefined} />
))`
  &.MuiButton-root {
    background-color: ${isFlat('transparent', getBackgroundColor)};
    min-width: 155px;
    border-radius: ${borderRadiusMax}px;
    padding: ${spacingSm}px;
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
