import styled from 'styled-components/native';

import { getTheme } from '../../utils/helpers';

import Typography from '../Typography';

const primaryMain = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');

export const Text = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${primaryMain};
  text-align: center;
  margin-vertical: ${smallSpacing};
`;
