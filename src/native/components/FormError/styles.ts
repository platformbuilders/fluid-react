import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import Typography from '../Typography';
import { getTheme, ifStyle } from '../../utils/helpers';

const isCentered = ifStyle('centered');
const isLarge = ifStyle('large');
const failure = getTheme('failure');

type ErrorTextProps = {
  centered: boolean;
  large: boolean;
  accessibilityLabel: string;
  testID: string;
};

export const ErrorText = styled(Typography).attrs((props: ErrorTextProps) => ({
  variant: isLarge('footnote', 'footnote')(props),
}))<ErrorTextProps>`
  color: ${failure};
  text-align: ${isCentered('center', 'left')};
  margin-top: ${isLarge(0, moderateScale(2))}px;
`;
