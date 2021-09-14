import styled from 'styled-components';
import { getTheme } from '../../utils/helpers';

const primary = getTheme('primary.main');

export const CustomLink = styled.a`
  color: ${primary};
  text-decoration: none;
  cursor: pointer;
`;
