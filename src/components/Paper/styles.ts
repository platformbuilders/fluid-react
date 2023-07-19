import { BoxShadowVariants } from 'src/enums';
import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';

const cardBorderRadius = getTheme('borderRadius.md');
const spacingMd = getTheme('spacing.md');

interface WrapperProps {
  elevation?: keyof typeof BoxShadowVariants;
  square?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: ${spacingMd}px;
  box-shadow: ${({ elevation }) => getTheme(`boxShadow.${elevation}`)};
  border-radius: ${({ square }) => (square ? 0 : cardBorderRadius)}px;
`;
