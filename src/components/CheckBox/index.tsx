import React, { FC } from 'react';
import DefaultCheckbox from 'react-native-check-box';
import { colors } from '../../theme';
import FormError from '../FormError';
import { Wrapper, defaultLabelStyle, containerStyle } from './styles';

interface Props {
  checked?: boolean;
  label?: string;
  labelBefore?: string;
  error?: string;
  onPress?: () => null;
  labelStyle?: object[];
  style?: any;
}

const Checkbox: FC<Props> = ({
  label = '',
  error = '',
  labelBefore = '',
  checked = false,
  onPress = (): void => {},
  labelStyle = defaultLabelStyle,
  style,
  ...rest
}) => (
  <FormError error={error}>
    <Wrapper style={style}>
      <DefaultCheckbox
        style={containerStyle}
        checkBoxColor={colors.primary.light}
        isChecked={checked}
        rightText={label}
        rightTextStyle={labelStyle}
        leftText={labelBefore}
        onClick={onPress}
        {...rest}
      />
    </Wrapper>
  </FormError>
);

export default Checkbox;
