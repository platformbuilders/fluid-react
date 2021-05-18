import { getTheme } from '@platformbuilders/helpers';
import { scaledFontSize } from './fontScale';

export const getFontSize = (props: any): number => {
  const fontSize = getTheme(`${props.variant}.fontSize`)(props) || 16;
  return scaledFontSize(fontSize);
};

export const getLineHeight = (props: any): number => {
  const lineHeight = getTheme(`${props.variant}.lineHeight`)(props) || 22;
  return scaledFontSize(lineHeight);
};
