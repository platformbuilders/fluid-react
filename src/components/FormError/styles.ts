import styled from 'styled-components';
import { Typography } from '..';
import { getTheme } from '../../utils/helpers';

export const ErrorText = styled(Typography).attrs({ variant: 'xs' })`
  color: ${getTheme('danger.main')};
`;
