import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';

const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:${spacingMd}px
  padding: ${spacingSm}px;
`;
