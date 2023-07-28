import styled from 'styled-components';
import {
  TypographyVariants,
  getFontSize,
  getLineHeight,
  getTheme,
} from '@platformbuilders/theme-toolkit';
import { TypographyTypeBase } from '.';

export type TypographyTypeStyleProps = TypographyTypeBase & {
  $lineHeightVariant?: TypographyVariants;
  $variant?: TypographyVariants;
};

export const Text = styled.p<TypographyTypeStyleProps>`
  color: ${getTheme('text.main')};
  font-size: ${(props) => getFontSize({ ...props, variant: props.$variant })}px;
  line-height: ${(props) =>
    getLineHeight({
      ...props,
      lineHeightVariant: props.$lineHeightVariant,
    })}px;
`;
