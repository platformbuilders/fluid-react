import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { TouchableType } from '../../utils/types';
import LoadingIndicator from '../LoadingIndicator';
import { ThemeContext } from '../ThemeContext';
import { Touchable, ButtonWrapper, TextButton } from './styles';

interface Props extends TouchableType {
  style?: any;
  textStyle?: object;
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
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Button;
