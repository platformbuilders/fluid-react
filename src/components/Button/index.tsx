import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import LoadingIndicator from '../LoadingIndicator';
import { ThemeContext } from '../ThemeContext';
import { Touchable, ButtonWrapper, TextButton } from './styles';

type Props = {
  children: string;
  onPress(): void;
  id: string;
  accessibility: string;
  style?: object[];
  textStyle?: object;
  disabled?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  terciary?: boolean;
  loading?: boolean;
};

const Button: FC<Props> = ({
  children,
  onPress,
  accessibility,
  style = [{}],
  textStyle = {},
  disabled = false,
  rounded = false,
  secondary = false,
  terciary = false,
  loading = false,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Touchable
        accessibility={accessibility}
        disabled={loading || disabled}
        onPress={onPress}
        rounded={rounded}
      >
        <ButtonWrapper
          secondary={secondary}
          terciary={terciary}
          style={style}
          disabled={disabled}
          rounded={rounded}
        >
          {loading && <LoadingIndicator />}
          {!loading && (
            <>
              <TextButton
                secondary={secondary}
                terciary={terciary}
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
