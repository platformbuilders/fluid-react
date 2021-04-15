import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import { StyleSheet, Animated } from 'react-native';
import {
  scaledFontSize,
  ifStyle,
  switchStyle,
  getTheme,
  getFontSize,
  getLineHeight,
} from '../../utils/helpers';
import DefaultIcon from '../Icon';

import { TextInputType, InputStatus } from '../../types';

type InputAreaWrapperProps = {
  multiline: boolean;
  padding?: number;
};

type BottomLineProps = {
  contrast: boolean;
  status: string;
};

// const factor = 1.2;
// const normalTextSize = moderateScale(16, factor);
// const normalPlaceholderSize = moderateScale(14, factor);
// const bigTextSize = moderateScale(24, factor);
// const bigPlaceholderSize = moderateScale(20, factor);
// const placeholderVariant = (props: any) => getFontSize('subhead')(props);
// const placeholderBigVariant = 'title4';

const isLeftIcon = ifStyle('leftIcon');
const isMultiline = ifStyle('multiline');
const isCentered = ifStyle('centered');
const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const switchStatus = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const success = getTheme('success');
const textColor = getTheme('text');
const failure = getTheme('failure');
const disabled = getTheme('disabled');
const inputColor = (props: TextInputType | BottomLineProps): any =>
  switchStatus({
    [InputStatus.Success]: success,
    [InputStatus.Failure]: failure,
    [InputStatus.Default]: isContrast(primaryContrast, textColor)(props),
    [InputStatus.Disabled]: disabled,
  });

export const LABEL_UPPER_STYLE = {
  top: -10,
  fontSize: scaledFontSize(14),
};

export const LABEL_LOWER_STYLE = {
  top: 20,
  fontSize: scaledFontSize(18),
};

type WrapperProps = {
  multiline: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${hasLabel(smallSpacing, 0)};
  position: relative;
`;

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  padding-top: ${({ padding }: InputAreaWrapperProps) =>
    (!!padding && `${padding}px`) || smallSpacing};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextLabel = styled.Text`
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
  position: absolute;
  color: ${inputColor};
  top: ${LABEL_LOWER_STYLE.top}px;
`;
export const Label = Animated.createAnimatedComponent(TextLabel);

export const TextInput = styled.TextInput.attrs((props: TextInputType) => ({
  accessibilityLabel: props.accessibilityLabel || props.accessibility,
  testID: props.testID || props.id,
  textAlign: isCentered('center', 'left')(props),
  placeholderTextColor: props.placeholderTextColor
    ? props.placeholderTextColor
    : '#72727260',
}))<TextInputType>`
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: ${moderateScale(24)}px;
  color: ${inputColor};
  margin-top: ${isMultiline(mediumSpacing, 0)};
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;

export const BottomLine = styled.View<BottomLineProps>`
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${inputColor};
`;

type IconProps = {
  contrast: boolean;
  error: boolean;
  leftIcon: boolean;
  iconColor?: string;
};
export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: hasError(
    failure(props),
    props.iconColor ||
      isContrast(primaryContrast(props), primaryMain(props))(props),
  )(props),
}))<IconProps>`
  padding-right: ${isLeftIcon(moderateScale(10), 0)}px;
`;
