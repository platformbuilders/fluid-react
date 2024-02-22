import { BoxShadowVariants } from 'src/enums';
import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';

const cardBorderRadius = getTheme('borderRadius.md');
const spacingMd = getTheme('spacing.md');

export type ElevationVariants = keyof typeof BoxShadowVariants;

interface WrapperProps {
  elevation?: ElevationVariants;
  square?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: ${spacingMd}px;
  ${({ elevation }) => getTheme(`boxShadow.${elevation}`)};
  border-radius: ${({ square }) => (square ? 0 : cardBorderRadius)}px;
`;
