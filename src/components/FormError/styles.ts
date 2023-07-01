import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';
import Typography from '../Typography';

export const ErrorText = styled(Typography).attrs({ variant: 'xs' })`
  color: ${getTheme('danger.main')};
`;
