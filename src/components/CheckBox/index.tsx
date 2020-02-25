import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultCheckbox from 'react-native-check-box';
import { colors } from '../../theme';
import FormError from '../FormError';
import { ThemeContext } from '../ThemeContext';
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
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Checkbox;
