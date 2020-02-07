import React, { FC } from 'react';
import { CheckBox as DefaultCheckbox } from '~/utils/modules';
import { FormError } from '~/components';
import { colors } from '~/theme';
import { Wrapper, defaultLabelStyle, containerStyle } from './styles';

type Props = {
  checked?: boolean;
  label?: string;
  labelBefore?: string;
  error?: string;
  onPress?: () => null;
  labelStyle?: object[];
  style?: any;
};

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
