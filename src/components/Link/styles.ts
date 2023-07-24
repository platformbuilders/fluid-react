import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';

const primary = getTheme('brand.primary.main');

export const CustomLink = styled.p`
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
