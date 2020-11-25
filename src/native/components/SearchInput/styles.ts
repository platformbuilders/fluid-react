import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import TextInput from '../TextInput';
import { getTheme } from '../../utils/helpers';

const disabled = getTheme('disabled.main');
const primaryContrast = getTheme('primary.contrast');
const largeSpacing = getTheme('largeSpacing');
const largeRadius = getTheme('largeRadius');

const wrapperHeight = moderateScale(56);

export const Wrapper = styled.View`
  flex-direction: row;
  flex: 1;
  height: ${wrapperHeight}px;
  background-color: ${primaryContrast};
  align-items: center;
  justify-content: center;
  padding-horizontal: ${largeSpacing};
  border-radius: ${largeRadius};
`;

type InputProps = {
  iconColor?: string;
};
export const Input = styled(TextInput).attrs((props: InputProps) => ({
  iconColor: `${props.iconColor || disabled(props)}`,
  iconTouchableEnabled: true,
  iconSize: moderateScale(26),
}))`
  width: 100%;
  padding: 0;
  height: 90%;
`;
