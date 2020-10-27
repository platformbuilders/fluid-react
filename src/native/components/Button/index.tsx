import React, { FC } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableType, ButtonVariants } from '../../types';
import { Touchable, ButtonWrapper, TextButton, Loading } from './styles';

interface Props extends TouchableType {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  rounded?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
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
      accessibilityLabel={accessibilityLabel || accessibility}
      testID={testID || id}
      disabled={loading || disabled}
      onPress={onPress}
      rounded={rounded}
    >
      <ButtonWrapper
        variant={variant}
        style={style}
        disabled={disabled}
        rounded={rounded}
      >
        {loading && <Loading />}
        {!loading && (
          <>
            <TextButton variant={variant} style={textStyle} disabled={disabled}>
              {children}
            </TextButton>
          </>
        )}
      </ButtonWrapper>
    </Touchable>
  );
};

export default Button;
