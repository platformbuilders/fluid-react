import React, { FC, useState, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';
import { DatePickerProps } from 'react-native-datepicker';
import FormError from '../FormError';
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
  mode?: DatePickerProps['mode'];
  androidMode?: DatePickerProps['androidMode'];
  onDateChange?(x: string): void;
  maxDate?: string;
  editable?: boolean;
  locale?: string;
  format?: string;
  dark?: boolean;
  status?: string;
  id?: string;
  accessibility: string;
}

const DatePickerInput: FC<Props> = ({
  id,
  accessibility,
  label = '',
  error = '',
  dark = false,
  editable = true,
  value = '',
  testID,
  mode = 'date',
  androidMode = 'spinner',
  locale = 'pt-BR',
  format = 'DD/MM/YYYY',
  cancelBtnText = 'Cancelar',
  confirmBtnText = 'Confirmar',
  onDateChange = (): void => {},
  maxDate,
}) => {
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
        useNativeDriver: false,
      }),
    );

    setIsPlaceHolder(false);

    Animated.parallel(animations).start();
  }, [Animated, labelAnimatedStyle]);

  const updateDate = useCallback(
    (updatedDate: string): void => {
      setDate(updatedDate);
      execAnimation();
      if (onDateChange) {
        onDateChange(updatedDate);
      }
    },
    [onDateChange],
  );

  useEffect(() => {
    if (value) {
      execAnimation();
    }
  }, [value]);

  const customStyles = error
    ? {
        ...DatePickerStyles,
        dateInput: { borderColor: '#cc0000' },
      }
    : dark
    ? DatePickerStylesDark
    : DatePickerStyles;

  return (
    <FormError
      id={id || accessibility}
      accessibility={accessibility}
      error={error}
    >
      <Label
        error={error || ''}
        style={labelAnimatedStyle}
        isPlaceholder={isPlaceholder}
        dark={dark}
      >
        {label}
      </Label>
      <DatePicker
        mode={mode}
        androidMode={androidMode}
        locale={locale}
        placeholder=" "
        format={format}
        editable={!editable}
        date={date}
        customStyles={customStyles}
        maxDate={maxDate}
        testID={testID || accessibility}
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

export default DatePickerInput;
