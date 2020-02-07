import { Animated } from 'react-native';
import { DatePickerCustomStylesProps } from 'react-native-datepicker';
import styled from 'styled-components/native';
import { getTheme, switchStyle } from '~/utils/helpers';
import { DatePicker as DefaultDatePicker } from '~/utils/modules';
import { INPUT_STATUS } from '~/utils/enums';

const getStatusStyle = switchStyle('status');
const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');
const secondaryDark = getTheme('disabled');
const inputMainColor = (props: { dark: any }): any =>
  getStatusStyle({
    [INPUT_STATUS.SUCCESS]: getTheme('success'),
    [INPUT_STATUS.FAILURE]: getTheme('failure'),
    [INPUT_STATUS.DEFAULT]: props.dark ? primaryDark : primaryContrast,
    [INPUT_STATUS.DISABLED]: secondaryDark,
  });

export const LABEL_UPPER_STYLE = {
  top: 8,
  fontSize: 14,
};

export const LABEL_LOWER_STYLE = {
  top: 40,
  fontSize: 18,
};

interface TextProps {
  dark: boolean;
}

export const TextLabel = styled.Text<TextProps>`
  line-height: 19px;
  padding-bottom: 15px;
  color: ${(props): string =>
    props.dark ? primaryDark(props) : primaryContrast(props)};
`;

export const Label = Animated.createAnimatedComponent(TextLabel);

interface DatePickerProps {
  customStyles?: DatePickerCustomStylesProps;
  dark?: boolean;
  editable: boolean;
}
export const DatePicker = styled(DefaultDatePicker)<DatePickerProps>`
  width: 100%;
`;

export const BottomLine = styled.View`
  height: 1px;
  background-color: ${inputMainColor};
`;

const commonDatePickerStyles = {
  disabled: {
    backgroundColor: 'transparent',
  },
  dateInput: {
    borderWidth: 0,
  },
  dateTouchBody: {
    width: '100%',
  },
};

export const DatePickerStyles: DatePickerCustomStylesProps = {
  ...commonDatePickerStyles,
  placeholderText: {
    position: 'absolute',
    left: 0,
    color: '#fff',
    fontSize: LABEL_LOWER_STYLE.fontSize,
  },
  dateText: {
    position: 'absolute',
    left: 0,
    color: '#fff',
    fontSize: LABEL_UPPER_STYLE.fontSize,
    fontWeight: '700',
  },
};

export const DatePickerStylesDark: DatePickerCustomStylesProps = {
  ...commonDatePickerStyles,
  placeholderText: {
    position: 'absolute',
    left: 0,
    color: '#000',
    fontSize: LABEL_LOWER_STYLE.fontSize,
  },
  dateText: {
    position: 'absolute',
    left: 0,
    color: '#000',
    fontSize: LABEL_UPPER_STYLE.fontSize,
    fontWeight: '700',
  },
};
