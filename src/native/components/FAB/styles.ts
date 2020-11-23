import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

import { getTheme } from '../../utils/helpers';
import Touchable from '../Touchable';
import DefaultIcon from '../Icon';
import Typography from '../Typography';

const primaryContrast = getTheme('primary.contrast');
const accentMain = getTheme('accent.main');

type WrapperProps = {
  size: number;
};

export const Wrapper = styled(Touchable)<WrapperProps>`
  position: absolute;
  width: ${({ size }): any => size}px;
  height: ${({ size }): any => size}px;
  align-items: center;
  justify-content: center;
  background-color: ${accentMain};
  border-radius: ${({ size }): any => size / 2}px;
  elevation: 8;
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
