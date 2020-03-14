import React, { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableType } from '../../types';
import LoadingIndicator from '../LoadingIndicator';
import { Touchable, ButtonWrapper, TextButton } from './styles';

interface Props extends TouchableType {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
}

const Button: FC<Props> = ({
  id,
  children,
  onPress,
  accessibility,
  accessibilityLabel,
  testID,
  style = [{}],
  textStyle = {},
  disabled = false,
  rounded = false,
  secondary = false,
  tertiary = false,
  loading = false,
}) => {
  return (
    <Touchable
      id={id}
      accessibility={accessibility}
      accessibilityLabel={accessibility || accessibilityLabel}
      testID={testID || id}
      disabled={loading || disabled}
      onPress={onPress}
      rounded={rounded}
    >
      <ButtonWrapper
        secondary={secondary}
        tertiary={tertiary}
        style={style}
        disabled={disabled}
        rounded={rounded}
      >
        {loading && <LoadingIndicator />}
        {!loading && (
          <>
            <TextButton
              secondary={secondary}
              tertiary={tertiary}
              style={textStyle}
              disabled={disabled}
            >
              {children}
            </TextButton>
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
