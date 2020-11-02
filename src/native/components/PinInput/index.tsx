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

const PinInput: React.FC<PinInputType> = ({
  password = false,
  animated = false,
  centered = false,
  mask = '•',
  codeLength = 4,
  cellSpacing = moderateScale(6),
  iconSize = moderateScale(24),
  cellSize = moderateScale(56),
  caption,
  error,
  value,
  onChangeText,
  onFulfill,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useContext(ThemeContext);
  const defaultStyle = defaultStyling(theme);
  return (
    <FormError centered={centered} error={error}>
      <Wrapper>
        <PinCodeInput
          value={value}
          onTextChange={onChangeText}
          onFulfill={onFulfill}
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
            id="code_input_icon"
            accessibility="Exibir ou ocultar inputs"
            name={hidePassword ? 'eye' : 'eye-off'}
            size={iconSize}
            onPress={() => setHidePassword(!hidePassword)}
            contrast={false}
            error={false}
          />
        )}
      </Wrapper>
      {!!caption && <CaptionText centered={centered}>{caption}</CaptionText>}
    </FormError>
  );
};

export default PinInput;
