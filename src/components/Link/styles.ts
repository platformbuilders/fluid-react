import styled from 'styled-components';
import { Link } from '@material-ui/core';
import { getTheme } from '@platformbuilders/theme-toolkit';

const primary = getTheme('brand.primary.main');

export const CustomLink = styled(Link)`
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
