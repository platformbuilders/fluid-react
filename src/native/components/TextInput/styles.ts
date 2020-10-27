import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import { Animated } from 'react-native';
import DefaultIcon from '../Icon';
import { ifStyle, switchStyle, getTheme } from '../../utils/helpers';
import { TextInputType, InputStatus } from '../../types';

type InputAreaWrapperProps = {
  multiline: boolean;
};

type BottomLineProps = {
  contrast: boolean;
  status: string;
};

const normalTextSize = 16;
const bigTextSize = 24;

const isMultiline = ifStyle('multiline');
const isCentered = ifStyle('centered');
const isLarge = ifStyle('large');
const hasLabel = ifStyle('label');
const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const switchStatus = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');
const success = getTheme('success');
const failure = getTheme('failure');
const disabled = getTheme('disabled');
const inputColor = (props: TextInputType | BottomLineProps): any =>
  switchStatus({
    [InputStatus.Success]: success,
    [InputStatus.Failure]: failure,
    [InputStatus.Default]: isContrast(primaryContrast, primaryDark)(props),
    [InputStatus.Disabled]: disabled,
  });

export const LABEL_UPPER_STYLE = {
  top: -10,
  fontSize: 14,
};

export const LABEL_LOWER_STYLE = {
  top: 20,
  fontSize: 18,
};

type WrapperProps = {
  multiline: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: ${moderateScale(8)}px;
  position: relative;
  justify-content: ${hasLabel('flex-end', 'flex-start')};
`;

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  margin-top: 6px;
  margin-bottom: 9px;
  flex-direction: row;
`;

export const TextLabel = styled.Text`
  line-height: 20px;
  position: absolute;
  color: ${inputColor};
  font-size: ${LABEL_LOWER_STYLE.fontSize}px;
  top: ${LABEL_LOWER_STYLE.top}px;
`;
export const Label = Animated.createAnimatedComponent(TextLabel);

export const TextInput = styled.TextInput.attrs((props: TextInputType) => ({
  accessibility: props.accessibilityLabel || props.accessibility,
  testID: props.testID || props.id,
  textAlign: isCentered('center', 'left')(props),
  selectionColor: props.contrast
    ? `${primaryContrast(props)}80`
    : `${primaryDark(props)}80`,
  placeholderTextColor: props.contrast
    ? `${primaryContrast(props)}60`
    : `${primaryDark(props)}60`,
}))<TextInputType>`
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: 24px;
  font-weight: 700;
  color: ${isContrast(primaryContrast, primaryDark)};
  margin-top: ${isMultiline('16px', '0px')};
  font-size: ${isLarge(bigTextSize, normalTextSize)}px;
`;

export const BottomLine = styled.View<BottomLineProps>`
  height: 1px;
  background-color: ${inputColor};
`;

type IconProps = {
  contrast: boolean;
  error: boolean;
};
export const Icon = styled(DefaultIcon).attrs((props) => ({
  color: hasError(
    failure(props),
    isContrast(primaryContrast(props), primaryDark(props))(props),
  )(props),
}))<IconProps>``;
