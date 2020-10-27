import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import Typography from '../Typography';
import { getTheme, ifStyle } from '../../utils/helpers';

const isCentered = ifStyle('centered');
const isLarge = ifStyle('large');

type ErrorTextProps = {
  centered: boolean;
  large: boolean;
  accessibilityLabel: string;
  testID: string;
};

export const ErrorText = styled(Typography).attrs((props) => ({
  variant: isLarge('headline', 'subhead')(props),
}))<ErrorTextProps>`
  color: ${getTheme('failure')};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${moderateScale(3)}px;
`;
