import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { getTheme, ifStyle } from '../../utils/helpers';
import Touchable from '../Touchable';
import DefaultIcon from '../Icon';
import Typography from '../Typography';

const primaryContrast = getTheme('primary.contrast');
const accentMain = getTheme('accent.main');
const isRelative = ifStyle('relativePos');

type WrapperProps = {
  color?: string;
  size: number;
  relativePos: boolean;
};

export const Wrapper = styled(Touchable)<WrapperProps>`
  position: ${isRelative('relative', 'absolute')};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || accentMain};
  border-radius: ${({ size }) => size / 2}px;
`;

interface IconProps {
  iconColor?: string;
  iconSize?: number;
}

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: props.iconColor || primaryContrast(props),
  touchable: false,
  size: props.iconSize ? moderateScale(props.iconSize) : moderateScale(24),
}))<IconProps>``;

export const Title = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${primaryContrast};
  font-weight: 700;
`;
