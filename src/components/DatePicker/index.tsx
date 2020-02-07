import React, { FC, useState, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';

import { FormError } from '~/components';
import { INPUT_STATUS } from '~/utils/enums';

import {
  Label,
  BottomLine,
  DatePicker,
  DatePickerStyles,
  DatePickerStylesDark,
  LABEL_UPPER_STYLE,
  LABEL_LOWER_STYLE,
} from './styles';

interface Props {
  value?: string;
  label?: string;
  error?: string;
  cancelBtnText?: string;
  testID?: string;
  accessibilityLabel?: string;
  confirmBtnText?: string;
  onDateChange?(x: string): void;
  maxDate?: string;
  editable?: boolean;
  dark?: boolean;
  status?: string;
}

const DatePickerInput: FC<Props> = (props) => {
  const {
    label,
    error,
    maxDate,
    confirmBtnText,
    cancelBtnText,
    dark,
    editable = true,
  } = props;
  const [labelAnimatedStyle] = useState({
    top: new Animated.Value(LABEL_LOWER_STYLE.top),
    fontSize: new Animated.Value(LABEL_LOWER_STYLE.fontSize),
  });

  const [date, setDate] = useState('');
  const [isPlaceholder, setIsPlaceHolder] = useState(true);

  const execAnimation = useCallback(() => {
    const animations = Object.keys(LABEL_UPPER_STYLE).map((animationProp) =>
      Animated.timing(labelAnimatedStyle[animationProp], {
        toValue: LABEL_UPPER_STYLE[animationProp],
        duration: 200,
      }),
    );

    setIsPlaceHolder(false);

    Animated.parallel(animations).start();
  }, [Animated, labelAnimatedStyle]);

  const updateDate = useCallback(
    (date: string): void => {
      setDate(date);
      execAnimation();
      if (props.onDateChange) {
        props.onDateChange(date);
      }
    },
    [props.onDateChange],
  );

  useEffect(() => {
    if (props.value) {
      execAnimation();
    }
  }, [props.value]);

  const customStyles = error
    ? {
        ...DatePickerStyles,
        dateInput: { borderColor: '#cc0000' },
      }
    : dark
    ? DatePickerStylesDark
    : DatePickerStyles;

  return (
    <FormError error={error}>
      <Label
        error={error}
        style={labelAnimatedStyle}
        isPlaceholder={isPlaceholder}
        // @ts-ignore
        dark={dark}
      >
        {label}
      </Label>
      <DatePicker
        editable={!editable}
        date={date}
        mode="date"
        androidMode="spinner"
        locale="pt-BR"
        customStyles={customStyles}
        maxDate={maxDate}
        placeholder=" "
        format="DD/MM/YYYY"
        confirmBtnText={confirmBtnText}
        cancelBtnText={cancelBtnText}
        onDateChange={updateDate}
        showIcon={false}
        dark={dark}
      />
      <BottomLine dark={dark} />
    </FormError>
  );
};

DatePickerInput.defaultProps = {
  value: '',
  label: '',
  testID: '',
  accessibilityLabel: '',
  error: '',
  cancelBtnText: 'Cancelar',
  confirmBtnText: 'Confirmar',
  onDateChange: (): void => {},
  maxDate: undefined,
  editable: true,
  dark: false,
  status: INPUT_STATUS.DEFAULT,
};

export default DatePickerInput;
