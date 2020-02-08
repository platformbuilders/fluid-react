import { createContext } from 'react';
import { colors, metrics } from '../../theme';

const defaultTheme = {
  ...colors,
  ...metrics,
};

export const ThemeContext = createContext({
  theme: defaultTheme,
});

export const BuildersProvider = ThemeContext.Provider;
