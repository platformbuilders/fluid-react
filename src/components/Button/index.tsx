import React, { FC, useContext } from 'react';
import { LoadingIndicator } from '~/components';
import { Touchable, ButtonWrapper, TextButton } from './styles';
import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from 'styled-components';

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
        touchable={loading || disabled}
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
          {loading ? (
            <LoadingIndicator />
          ) : (
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
