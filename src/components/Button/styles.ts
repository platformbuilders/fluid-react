import styled from 'styled-components/native';
import TouchableComponent from '../Touchable';
import { getTheme } from '../../utils/helpers';

const primaryMain = getTheme('primary.main');
const secondaryMain = getTheme('secondary.main');
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
  terciary: boolean;
  secondary: boolean;
  disabled?: boolean;
}
export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: 42px;
  flex-direction: row;
  border: 2px solid;
  align-items: center;
  margin-vertical: 6px;
  min-width: 180px;
  padding: ${(props): string => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props): string => (props.rounded ? '50px' : '24px')}
  justify-content: center;
  background-color: ${(props): string =>
    props.terciary
      ? 'transparent'
      : props.secondary
      ? secondaryMain(props)
      : props.disabled
      ? primaryDark(props)
      : primaryMain(props)};
  border-color: ${(props): string =>
    props.terciary
      ? 'transparent'
      : props.secondary
      ? secondaryMain(props)
      : primaryDark(props)};
`;

interface TextButtonProps {
  terciary: boolean;
  secondary: boolean;
  disabled?: boolean;
}
export const TextButton = styled.Text<TextButtonProps>`
  color: ${(props): string =>
    props.secondary
      ? primaryMain(props)
      : props.terciary
      ? primaryDark(props)
      : primaryContrast(props)};
`;
