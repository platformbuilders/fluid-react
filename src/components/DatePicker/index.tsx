import React, { useRef } from 'react';
import { DateObject, DatePickerProps } from 'react-multi-date-picker';
import TextInput from '../TextInput';
import localeCalendar from './locale_calendar.json';
import { CustomCalendar } from './styles';

interface Props extends DatePickerProps {
  value: DateObject;
  onChange: (date: DateObject) => void;
  minDate?: Date;
  maxDate?: Date;
  name: string;
  id: string;
  disableMonthPicker?: boolean;
  disableYearPicker?: boolean;
  workDays?: boolean;
  holidays?: string[];
  inputVariant?: 'default' | 'outlined';
  disabledInput?: boolean;
}

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disableMonthPicker,
  disableYearPicker,
  workDays,
  holidays,
  name,
  id,
  inputVariant = 'outlined',
  disabledInput = false,
}) => {
  const datePickerRef = useRef();
  return (
    <CustomCalendar
      locale={localeCalendar}
      ref={datePickerRef}
      render={(value, openCalendar, onChange) => {
        return (
          <TextInput
            name={name}
            id={id}
            value={value}
            onClick={openCalendar}
            onChange={(e) => (disabledInput ? value : onChange(e))}
            iconRight="ChevronDownIcon"
            onClickIconRight={openCalendar}
            variant={inputVariant}
          />
        );
      }}
      format="DD/MM/YYYY"
      headerOrder={['MONTH_YEAR', 'LEFT_BUTTON', 'RIGHT_BUTTON']}
      value={value}
      arrow={false}
      minDate={minDate}
      maxDate={maxDate}
      onChange={onChange}
      disableMonthPicker={disableMonthPicker}
      disableYearPicker={disableYearPicker}
      mapDays={(days) => {
        const isWeekend = [0, 6].includes(days.date.weekDay.index);
        const isDisabled = holidays?.includes(
          days.date.toDate().toISOString().slice(0, 10),
        );

        if ((isWeekend && workDays) || isDisabled) {
          return {
            disabled: isWeekend,
          };
        }
        return {
          disabled: false,
        };
      }}
    />
  );
};

export default DatePickerComponent;
