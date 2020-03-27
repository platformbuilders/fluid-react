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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent';
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
  loading = false,
  variant = 'primary',
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
        type={variant}
        style={style}
        disabled={disabled}
        rounded={rounded}
      >
        {loading && <LoadingIndicator />}
        {!loading && (
          <>
            <TextButton type={variant} style={textStyle} disabled={disabled}>
              {children}
            </TextButton>
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
