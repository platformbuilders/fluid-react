import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { getTheme } from '@platformbuilders/theme-toolkit';

export const Wrapper = styled(Paper)`
  padding: ${getTheme('spacing.md')}px;
`;
