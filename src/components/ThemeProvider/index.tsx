import { createContext } from 'react';
import { colors, metrics } from '../../theme';

const defaultTheme = {
  ...colors,
  ...metrics,
};

const ThemeContext = createContext({
  theme: defaultTheme,
});

export default ThemeContext.Provider;
