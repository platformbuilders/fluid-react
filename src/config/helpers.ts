import { DefaultTheme } from 'styled-components';
import { animations, colors, radius } from '../theme';

export const theme: DefaultTheme = {
  ...colors,
  ...animations,
  ...radius,
};
