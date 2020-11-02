/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getTheme } from '@platformbuilders/helpers';
import { scaledFontSize } from './fontScale';

export const getFontSize = (props: any): any =>
  scaledFontSize(getTheme(`${props.variant}.fontSize`)(props));

export const getLineHeight = (props: any): any =>
  scaledFontSize(getTheme(`${props.variant}.lineHeight`)(props));
