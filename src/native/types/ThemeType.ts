import { Colors } from './Colors';
import { Spacings } from './Spacings';
import { Animations } from './Animations';
import { Radius } from './Radius';
import { TypographyTheme } from './Typography';

export type ThemeType = Colors &
  Spacings &
  Radius &
  Animations &
  TypographyTheme;
