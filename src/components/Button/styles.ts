import styled from 'styled-components/native';
import TouchableComponent from '../Touchable';
import Typography from '../Typography';
import { getTheme } from '../../utils/helpers';

const disabled = getTheme('disabled');
const primaryMain = getTheme('primary.main');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const primaryContrast = getTheme('primary.contrast');
const primaryDark = getTheme('primary.dark');

interface TouchableProps {
  rounded: boolean;
}
export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props): string => (props.rounded ? '50px' : '0')};
`;

interface ButtonWrapperProps {
  rounded: boolean;
  tertiary: boolean;
  secondary: boolean;
  disabled?: boolean;
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: 46px;
  flex-direction: row;
  align-items: center;
  margin-vertical: 6px;
  min-width: 180px;
  padding: ${(props): string => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props): string => (props.rounded ? '50px' : '8px')}
  justify-content: center;
  background-color: ${(props): string =>
    props.tertiary
      ? 'transparent'
      : props.secondary
      ? props.theme.secondary.main
      : props.disabled
      ? props.theme.disabled
      : props.theme.primary.main};
`;

interface TextButtonProps {
  tertiary: boolean;
  secondary: boolean;
  disabled?: boolean;
}
export const TextButton = styled(Typography).attrs({ variant: 'headline' })<
  TextButtonProps
>`
  letter-spacing: 0.4px;
  color: ${(props): string =>
    props.secondary ? secondaryContrast(props) : primaryContrast(props)};
`;
