import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

export const Wrapper = styled(Paper)`
  padding: ${getTheme('largeSpacing')}px;
`;
