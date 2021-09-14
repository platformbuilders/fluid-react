import styled from 'styled-components';
import { Link } from '@material-ui/core';
import { getTheme } from '../../utils/helpers';

const primary = getTheme('primary.main');

export const CustomLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
