import { lighten, darken } from 'polished';
import { Colors } from '../utils/types';

const primary = '#C6B09E';
const secondary = '#805281';
const tertiary = '#2A2E39';
const accent = '#547E6A';

const colors: Colors = {
  failure: '#cc0000',
  warning: '#F5B800',
  success: '#357a38',
  transparent: 'transparent',
  disabled: '#EBEBE4',
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    contrast: '#ffffff',
  },
  tertiary: {
    light: lighten(0.15, tertiary),
    main: tertiary,
    dark: darken(0.1, tertiary),
    contrast: '#ffffff',
  },
  accent: {
    light: lighten(0.05, accent),
    main: accent,
    dark: darken(0.05, accent),
    contrast: '#ffffff',
  },
};

export default colors;
