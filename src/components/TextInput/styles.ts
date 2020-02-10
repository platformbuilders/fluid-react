import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { ifStyle, switchStyle, getTheme } from '../../utils/helpers';
import { TextInput as TextInputType, InputStatus } from '../../utils/types';

interface InputAreaWrapperProps {
  multiline: boolean;
}

interface BottomLineProps {
  dark?: boolean;
  status?: string;
}

const isMultiline = ifStyle('multiline');
const switchStatus = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');
const success = getTheme('success');
const failure = getTheme('failure');
const disabled = getTheme('disabled');
const inputColor = (props: BottomLineProps): any =>
  switchStatus({
    [InputStatus.SUCCESS]: success,
    [InputStatus.FAILURE]: failure,
    [InputStatus.DEFAULT]: props.dark ? primaryDark : primaryContrast,
    [InputStatus.DISABLED]: disabled,
  });

export const LABEL_UPPER_STYLE = {
  top: 8,
  fontSize: 14,
};

export const LABEL_LOWER_STYLE = {
  top: 40,
  fontSize: 18,
};

interface WrapperProps {
  multiline: boolean;
}

export const Wrapper = styled.View<WrapperProps>`
  height: ${isMultiline('auto', '89px')};
  max-height: ${isMultiline('auto', '89px')};
  min-height: ${isMultiline('89px', 'auto')};
  padding-top: 8px;
  position: relative;
  justify-content: flex-end;
`;

export const TextLabel = styled.Text<TextInputType>`
  line-height: 19px;
  position: absolute;
  color: ${inputColor};
  font-size: ${LABEL_LOWER_STYLE.fontSize}px;
`;

export const Label = Animated.createAnimatedComponent(TextLabel);

export const InputAreaWrapper = styled.View<InputAreaWrapperProps>`
  margin-top: 6px;
  margin-bottom: 9px;
  flex-direction: row;
  min-height: 24px;
  max-height: ${isMultiline('auto', '24px')};
`;

export const TextInput = styled.TextInput<TextInputType>`
  padding: 0;
  flex-grow: 1;
  border-width: 0;
  min-height: 24px;
  margin-top: ${isMultiline('16px', '0px')};
  max-height: ${isMultiline('150px', '24px')};
  font-weight: 700;
  color: ${inputColor};
`;

export const BottomLine = styled.View<BottomLineProps>`
  height: 1px;
  background-color: ${inputColor};
`;
