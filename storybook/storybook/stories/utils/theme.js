import { darken, lighten } from 'polished';

const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';

export const theme = {
  failure: '#cc0000',
  warning: '#F5B800',
  success: '#357a38',
  transparent: 'transparent',
  disabled: '#EBEBE4',
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#000',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    contrast: '#000',
  },
  tertiary: {
    light: lighten(0.15, tertiary),
    main: tertiary,
    dark: darken(0.1, tertiary),
    contrast: '#000',
  },
  accent: {
    light: lighten(0.05, accent),
    main: accent,
    dark: darken(0.05, accent),
    contrast: '#000',
  },
};
