interface SubColors {
  light: string;
  main: string;
  dark: string;
  contrast: string;
}
export type Colors = {
  type: string;
  failure: string;
  warning: string;
  success: string;
  disabled: string;
  primary: SubColors;
  secondary: SubColors;
  accent: SubColors;
};
