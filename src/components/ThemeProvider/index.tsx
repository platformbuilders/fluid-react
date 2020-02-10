import React, { FC } from 'react';
import { Theme } from '../../utils/types';
import { ThemeContext } from '../ThemeContext';
import { colors, metrics } from '../../theme';

const defaultTheme = {
  ...colors,
  ...metrics,
};

interface Props {
  theme: Theme;
}

const BuildersProvider: FC<Props> = ({ children, theme = defaultTheme }) => (
  <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
);

export default BuildersProvider;
