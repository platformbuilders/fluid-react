import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Touchable from '../Touchable';
import { getTheme, ifStyle } from '../../utils/helpers';

const accentMain = getTheme('accent.main');

const showBorder = ifStyle('showBorder');
const hasBorderWidth = ifStyle('borderWidth');
const hasBorderColor = ifStyle('borderColor');

export const Wrapper = styled(Touchable)<{
  size: number;
  disabled: boolean;
  showBorder: boolean;
  borderWidth: number;
  borderColor: string;
}>`
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  border-radius: ${(props): number => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props) =>
    showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props) => hasBorderColor(props.borderColor, accentMain)};
`;

export const Image = styled.Image.attrs({ resizeMode: 'cover' })<{
  source: any;
}>`
  width: 100%;
  height: 100%;
`;

export const CameraView = styled(RNCamera)<{ size: number }>`
  width: ${(props): number => props.size}px;
  height: 100%;
  border-radius: ${(props): number => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;
