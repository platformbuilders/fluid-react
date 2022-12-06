import styled from 'styled-components';
import { TypographyType, getTheme } from '@platformbuilders/theme-toolkit';
import { getFontSize, getLineHeight } from '../../utils/helpers';

export const Text = styled.p<TypographyType>`
  color: ${getTheme('text.main')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
