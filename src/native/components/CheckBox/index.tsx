import React, { FC, ReactElement } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import FormError from '../FormError';
import { Wrapper, defaultLabelStyle, containerStyle, CheckBox } from './styles';

type Props = {
  id?: string;
  accessibility: string;
  checked?: boolean;
  label?: ReactElement | string;
  labelBefore?: ReactElement | string;
  error?: string;
  onPress?(): void;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  checkBoxColor?: string;
  checkedCheckBoxColor?: string;
  uncheckedCheckBoxColor?: string;
};

const CheckboxComponent: FC<Props> = ({
  id,
  accessibility,
  label = '',
  error = '',
  labelBefore = '',
  checked = false,
  onPress = (): void => {},
  labelStyle = defaultLabelStyle,
  checkBoxColor,
  checkedCheckBoxColor,
  uncheckedCheckBoxColor,
  style,
}) => (
  <FormError
    id={id || accessibility}
    accessibility={accessibility}
    error={error}
  >
    <Wrapper style={style}>
      <CheckBox
        testID={`check_${id || accessibility}`}
        accessibilityLabel={`Check ${accessibility}`}
        style={containerStyle}
        isChecked={checked}
        rightText={label}
        rightTextStyle={labelStyle}
        leftText={labelBefore}
        onClick={onPress}
        checkBoxColor={checkBoxColor}
        checkedCheckBoxColor={checkedCheckBoxColor}
        uncheckedCheckBoxColor={uncheckedCheckBoxColor}
      />
    </Wrapper>
  </FormError>
);

export default CheckboxComponent;
