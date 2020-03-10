import styled from 'styled-components/native';
import Typography from '../Typography';
import { getTheme, ifStyle } from '../../utils/helpers';

const isCentered = ifStyle('centered');

interface ErrorTextProps {
  centered: boolean;
}
export const ErrorText = styled(Typography)<ErrorTextProps>`
  color: ${getTheme('failure')};
  margin-top: ${getTheme('smallSpacing')};
  text-align: ${isCentered('center', 'left')};
  min-height: 25px;
`;
