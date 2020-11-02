import styled from 'styled-components/native';
import { getTheme, getFontSize, getLineHeight } from '../../utils/helpers';
import { TypographyType } from '../../types';

export const Text = styled.Text<TypographyType>`
  color: ${getTheme('text')};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
