import styled from 'styled-components';
import { getTheme } from '~/utils/helpers';
import Typography from '../Typography';

const accentDark = getTheme('accent.dark');

export const Text = styled(Typography)`
  font-weight: 500;
  color: ${accentDark};
  text-decoration-color: ${accentDark};
  text-decoration-line: underline;
`;
