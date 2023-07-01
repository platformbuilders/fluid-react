import { FluidTheme, themeFormatter } from '@platformbuilders/theme-toolkit';
import animations from './animations';
import defaultTheme from './theme.json';

const themeJson: FluidTheme = {
  ...themeFormatter(defaultTheme),
  ...animations,
};

export default themeJson;
