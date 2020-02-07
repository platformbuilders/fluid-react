import styled from 'styled-components/native';
import { Typography, Icon } from '~/components';
import { getTheme } from '~/utils/helpers';

const mainColor = getTheme('primary.light');

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled(Icon).attrs((props) => ({
  name: 'chevron-left',
  size: 32,
  colors: mainColor(props),
}))``;

export const Title = styled(Typography).attrs({ variant: 'title3' })`
  font-weight: 700;
`;
