import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import { getTheme, ifStyle } from '../../utils/helpers';
import Touchable from '../Touchable';

const textColor = getTheme('text');
const hasColor = ifStyle('radioButtonColor');
const hasCheckedColor = ifStyle('checkedRadioButtonColor');

type RadioProps = {
  radioButtonColor?: string;
  size: number;
};

export const Radio = styled(Touchable)<RadioProps>`
  width: ${({ size }) => moderateScale(size)}px;
  height: ${({ size }) => moderateScale(size)}px;
  border-radius: ${({ size }) => moderateScale(size / 2)}px;
  border: ${moderateScale(1)}px
    ${({ radioButtonColor }): any => hasColor(radioButtonColor, textColor)};
  align-items: center;
  justify-content: center;
`;

type CheckRadioProps = {
  checkedRadioButtonColor?: string;
  internalSize: number;
};

export const CheckedRadio = styled.View<CheckRadioProps>`
  width: ${({ internalSize }) => moderateScale(internalSize)}px;
  height: ${({ internalSize }) => moderateScale(internalSize)}px;
  background-color: ${({ checkedRadioButtonColor }): any =>
    hasCheckedColor(checkedRadioButtonColor, textColor)};
  border-radius: ${({ internalSize }) => moderateScale(internalSize / 2)}px;
`;
