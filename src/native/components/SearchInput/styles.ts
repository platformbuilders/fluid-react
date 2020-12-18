import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import TextInput from '../TextInput';
import { getTheme, getShadow } from '../../utils/helpers';

const disabled = getTheme('disabled.main');
const primaryContrast = getTheme('primary.contrast');
const largeSpacing = getTheme('largeSpacing');
const largeRadius = getTheme('largeRadius');

const wrapperHeight = moderateScale(56);

type WrapperProps = {
  height?: number;
  inputPadding?: number;
  hasShadow?: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  flex: 1;
  height: ${({ height }) =>
    (!!height && `${height}px`) || `${wrapperHeight}px`};
  background-color: ${primaryContrast};
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ inputPadding }) =>
    (!!inputPadding && `${inputPadding}px`) || largeSpacing};
  border-radius: ${largeRadius};
  ${({ hasShadow }) => (hasShadow ? getShadow() : {})}
`;

type InputProps = {
  iconColor?: string;
  iconSize?: number;
  inputHeight?: number | string;
  inputPadding?: number;
};

export const Input = styled(TextInput).attrs((props: InputProps) => ({
  iconColor: `${props.iconColor || disabled(props)}`,
  iconTouchableEnabled: true,
  iconSize: props.iconSize || moderateScale(26),
}))<InputProps>`
  width: 100%;
  padding: 0;
  height: ${({ inputHeight }) => (!!inputHeight && inputHeight) || '90%'};
`;
