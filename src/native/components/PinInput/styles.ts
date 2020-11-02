import styled from 'styled-components/native';
import DefaultCodeInput from 'react-native-smooth-pincode-input';
import { moderateScale } from 'react-native-size-matters';
import { ThemeType } from '../../types';
import { ifStyle, getTheme } from '../../utils/helpers';
import Typography from '../Typography';
import DefaultIcon from '../Icon';

const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const isCentered = ifStyle('centered');
const failure = getTheme('failure');
const primaryMain = getTheme('primary.main');
const disabledDark = getTheme('primary.Dark');
const primaryContrast = getTheme('primary.contrast');
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');

export const defaultStyling = (theme?: ThemeType): any => ({
  cellStyle: {
    borderRadius: moderateScale(8),
    borderColor: theme ? disabledDark(theme) : '#eeeeee',
    borderWidth: 2,
  },
  cellStyleFocused: {
    borderColor: theme ? primaryMain(theme) : '#eeeeee',
  },
  textStyle: {
    fontSize: moderateScale(26),
    color: 'black',
  },
});

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${smallSpacing};
`;

export const PinCodeInput = styled(DefaultCodeInput)``;

type IconProps = {
  contrast: boolean;
  error: boolean;
};
export const Icon = styled(DefaultIcon).attrs((props) => ({
  color: hasError(
    failure(props),
    isContrast(primaryContrast(props), primaryMain(props))(props),
  )(props),
}))<IconProps>`
  margin-left: ${mediumSpacing};
`;

type CaptionProps = {
  centered: boolean;
};

export const CaptionText = styled(Typography).attrs({ variant: 'footnote' })<
  CaptionProps
>`
  text-align: ${isCentered('center', 'left')};
  opacity: 0.67;
  font-weight: 300;
`;
