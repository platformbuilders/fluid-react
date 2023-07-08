import styled from 'styled-components';
import {
  getFontSize,
  getLineHeight,
  getTheme,
} from '@platformbuilders/theme-toolkit';
import { TypographyTypeStyleProps } from '../../types';

export const Text = styled.p<TypographyTypeStyleProps>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${(props) =>
    getLineHeight({
      ...props,
      lineHeightVariant: props.$lineHeightVariant,
    })}}px;
`;
