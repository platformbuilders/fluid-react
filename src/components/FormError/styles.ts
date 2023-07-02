import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';
import Typography from '../Typography';

const spacingXs = getTheme('spacing.xs');

export const ErrorText = styled(Typography).attrs({ variant: 'xs' })`
  margin-top: ${spacingXs}px;
  color: ${getTheme('danger.main')};
`;
