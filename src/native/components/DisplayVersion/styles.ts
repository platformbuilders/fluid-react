import styled from 'styled-components/native';

import { getTheme } from '../../utils/helpers';

import Typography from '../Typography';

const primaryMain = getTheme('primary.main');

export const Text = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${primaryMain};
  text-align: center;
  margin-vertical: 15px;
`;
