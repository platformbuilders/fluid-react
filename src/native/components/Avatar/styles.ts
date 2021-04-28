import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Touchable from '../Touchable';
import Icon from '../Icon';
import { getTheme, ifStyle } from '../../utils/helpers';

const accentMain = getTheme('accent.main');
const accentContrast = getTheme('accent.contrast');

const showBorder = ifStyle('showBorder');
const hasBorderWidth = ifStyle('borderWidth');
const hasBorderColor = ifStyle('borderColor');

type WrapperProps = {
  size: number;
  disabled: boolean;
  showBorder: boolean;
  borderWidth?: number;
  borderColor?: string;
};

export const Wrapper = styled(Touchable)<WrapperProps>`
  width: ${(props: WrapperProps): number => props.size}px;
  height: ${(props: WrapperProps): number => props.size}px;
  border-radius: ${(props: WrapperProps): number => props.size / 2}px;
  overflow: hidden;
  border-width: ${(props: WrapperProps): any =>
    showBorder(hasBorderWidth(props.borderWidth, '2'), '0')}px;
  border-color: ${(props: WrapperProps): any =>
    hasBorderColor(props.borderColor, accentMain)};
  position: relative;
`;

type IconWrapperProps = {
  size: number;
};

export const UploadIconWrapper = styled.View<IconWrapperProps>`
  align-items: center;
  justify-content: center;
  width: ${(props: IconWrapperProps): number => props.size / 4}px;
  height: ${(props: IconWrapperProps): number => props.size / 4}px;
  border-radius: ${(props: IconWrapperProps): number => props.size / 8}px;
  position: absolute;
  z-index: 2;
  background-color: ${accentMain};
`;

export const UploadIcon = styled(Icon).attrs({ name: 'camera' })`
  color: ${accentContrast};
`;

export const CameraView = styled(RNCamera)<{ size: number }>`
  width: ${(props: any): number => props.size}px;
  height: 100%;
  border-radius: ${(props: any): number => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;
