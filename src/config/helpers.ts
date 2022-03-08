import { DefaultTheme } from 'styled-components';
import { animations, colors, radius, spacing } from '../theme';

export const theme: DefaultTheme = {
  ...colors,
  ...animations,
  ...radius,
  ...spacing,
};
