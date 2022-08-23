import { toNumber } from 'lodash';

import { toOnlyNumbers } from '@platformbuilders/helpers';
import { getTheme } from '@platformbuilders/theme-toolkit';

const baseFontSize = 16;

export const getFontSize = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  return toNumber(fontSizeFromTheme) || baseFontSize;
};

export const getLineHeight = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  const lineHeightVariant = getTheme(`lineHeight.${props.lineHeightVariant}`)(
    props,
  );
  const lineHeightPercentage = lineHeightVariant
    ? toOnlyNumbers(lineHeightVariant as string)
    : '120';
  return (Number(fontSizeFromTheme) * Number(lineHeightPercentage)) / 100;
};
