import styled from 'styled-components/native';
import { getTheme } from '../../utils/helpers';
import Typography from '../Typography';

const primaryContrast = getTheme('primary.contrast');

type Props = {
  testID: string;
  accessibilityLabel: string;
};

export const Text = styled(Typography)<Props>`
  font-weight: 500;
  color: ${primaryContrast};
  text-decoration-color: ${primaryContrast};
  text-decoration-line: underline;
`;
