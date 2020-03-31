import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';
import TouchableComponent from '../Touchable';
import LoadingIndicator from '../LoadingIndicator';
import { ButtonVariants } from '../../types';
import { getTheme } from '../../utils/helpers';

const disabled = getTheme('disabled');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const tertiaryMain = getTheme('tertiary.main');
const tertiaryContrast = getTheme('tertiary.contrast');
const accentMain = getTheme('accent.main');
const accentContrast = getTheme('accent.contrast');

interface ButtonWrapperProps {
  rounded: boolean;
  variant: ButtonVariants;
  disabled?: boolean;
}

const buttonSize = moderateScale(48);

const getBackgroundColor = (props: ButtonWrapperProps): string => {
  if (props.disabled) {
    return disabled(props);
  }
  switch (props.variant) {
    case 'primary':
      return primaryMain(props);
    case 'secondary':
      return secondaryMain(props);
    case 'tertiary':
      return tertiaryMain(props);
    case 'accent':
      return accentMain(props);
    case 'flat':
      return 'transparent';
    default:
      return primaryMain(props);
  }
};

interface TextButtonProps {
  variant: ButtonVariants;
  disabled?: boolean;
}

const getTextColor = (props: TextButtonProps): string => {
  switch (props.variant) {
    case 'primary':
      return primaryContrast(props);
    case 'secondary':
      return secondaryContrast(props);
    case 'tertiary':
      return tertiaryContrast(props);
    case 'accent':
      return accentContrast(props);
    case 'flat':
      return primaryContrast(props);
    default:
      return primaryContrast(props);
  }
};

interface TouchableProps {
  rounded: boolean;
}
export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props): string => (props.rounded ? '50px' : '0')};
`;

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  margin-vertical: ${moderateScale(6)}px;
  min-width: ${moderateScale(180)}px;
  padding: ${(props): string => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props): string => (props.rounded ? '50px' : '8px')};
  justify-content: center;
  background-color: ${getBackgroundColor};
  border-color: ${getTextColor};
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-size: ${moderateScale(16)}px;
  letter-spacing: 0.4px;
  color: ${getTextColor};
  font-weight: 500;
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: ${moderateScale(55)}px;
`;
