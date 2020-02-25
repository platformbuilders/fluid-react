import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import FastImage from 'react-native-fast-image';
import Touchable from '../Touchable';
import { ifStyle } from '../../utils/helpers';

const showBorder = ifStyle('showBorder');

export const Wrapper = styled(Touchable)<{
  size: number;
  disabled: boolean;
  showBorder: boolean;
}>`
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  border-radius: ${(props): number => props.size / 2}px;
  overflow: hidden;
  border: ${showBorder('4px solid white', '')};
`;

export const Image = styled(FastImage).attrs({ resizeMode: 'cover' })<{
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
