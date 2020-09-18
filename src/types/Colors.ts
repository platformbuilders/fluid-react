type SubColor = {
  light: string;
  main: string;
  dark: string;
  contrast: string;
};

export type Colors = {
  text: string;
  failure: string;
  warning: string;
  success: string;
  info: string;
  disabled: SubColor;
  primary: SubColor;
  secondary: SubColor;
  tertiary: SubColor;
  accent: SubColor;
};
