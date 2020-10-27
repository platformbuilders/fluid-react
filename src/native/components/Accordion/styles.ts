import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import DefaultIcon from '../Icon';

export const Icon = styled(DefaultIcon).attrs({
  touchable: false,
  size: moderateScale(24),
})``;
