import React, { useContext, useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { ThemeContext } from 'styled-components';
import { PinInputType } from '../../types';
import FormError from '../FormError';
import {
  Wrapper,
  PinCodeInput,
  Icon,
  CaptionText,
  defaultStyling,
} from './styles';

const iconString = (hidePassword: boolean): string =>
  hidePassword ? 'eye' : 'eye-off';

const PinInput: React.FC<PinInputType> = ({
  password = false,
  animated = false,
  centered = false,
  contrast = false,
  mask = '•',
  codeLength = 4,
  cellSpacing = moderateScale(6),
  iconSize = moderateScale(24),
  cellSize = moderateScale(56),
  caption,
  error,
  value,
  onChangeText,
  onFulfill = () => {},
  wrapperStyle,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useContext(ThemeContext);
  const defaultStyle = defaultStyling(theme);
  const changeText = (text: string) => {
    onChangeText(text);
    if (text.length === codeLength) {
      onFulfill(text);
    }
  };

  return (
    <FormError centered={centered} error={error}>
      <Wrapper style={wrapperStyle}>
        <PinCodeInput
          value={value}
          onTextChange={changeText}
          password={password && hidePassword}
          mask={mask}
          codeLength={codeLength}
          animated={animated}
          cellSize={cellSize}
          cellSpacing={cellSpacing}
          {...defaultStyle}
          {...rest}
        />
        {password && (
          <Icon
            accessibility={`Exibir ou ocultar inputs - ${iconString(
              hidePassword,
            )}`}
            name={iconString(hidePassword)}
            size={iconSize}
            onPress={() => setHidePassword(!hidePassword)}
            contrast={contrast}
            error={false}
          />
        )}
      </Wrapper>
      {!!caption && (
        <CaptionText accessibility={caption} centered={centered}>
          {caption}
        </CaptionText>
      )}
    </FormError>
  );
};

export default PinInput;
