import styled from 'styled-components/native';
import { Animated } from 'react-native';
import DefaultIcon from '../Icon';
import { ifStyle, switchStyle, getTheme } from '../../utils/helpers';
import { TextInputType, InputStatus } from '../../types';

interface InputAreaWrapperProps {
  multiline: boolean;
}

interface BottomLineProps {
  contrast: boolean;
  status: string;
}

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

interface WrapperProps {
  multiline: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  height: ${hasLabel(isMultiline('auto', '89px'), isMultiline('auto', '32px'))};
  max-height: ${hasLabel(
    isMultiline('auto', '89px'),
    isMultiline('auto', '32px'),
  )};
  min-height: ${hasLabel(
    isMultiline('89px', 'auto'),
    isMultiline('auto', '32px'),
  )};
  justify-content: ${hasLabel('flex-end', 'flex-start')};
  padding-top: 8px;
  position: relative;
  justify-content: ${hasLabel('flex-end', 'flex-start')};
`;

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  margin-top: 6px;
  margin-bottom: 9px;
  flex-direction: row;
  min-height: 24px;
  max-height: ${isMultiline('auto', '24px')};
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
  color: ${inputColor};
  margin-top: ${isMultiline('16px', '0px')};
  max-height: ${isMultiline('150px', '24px')};
  font-size: ${isLarge(bigTextSize, normalTextSize)}px;
`;

export const BottomLine = styled.View<BottomLineProps>`
  height: 1px;
  background-color: ${inputColor};
`;

interface IconProps {
  error: boolean;
}
export const Icon = styled(DefaultIcon).attrs((props) => ({
  color: hasError(failure(props), primaryContrast(props))(props),
}))<IconProps>``;
