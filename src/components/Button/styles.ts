import styled from 'styled-components/native';
import TouchableComponent from '../Touchable';
import Typography from '../Typography';
import { getTheme } from '../../utils/helpers';

const disabled = getTheme('disabled');
const primaryMain = getTheme('primary.main');
const accentMain = getTheme('accent.main');
const accentContrast = getTheme('accent.contrast');
const secondaryMain = getTheme('secondary.main');
const secondaryContrast = getTheme('secondary.contrast');
const primaryContrast = getTheme('primary.contrast');

const getVariant = (
  props: ButtonWrapperProps | TextButtonProps,
  kind: 'wrapper' | 'text',
): string => {
  if (props.disabled && kind === 'wrapper') {
    return disabled(props);
  }

  switch (props.type) {
    case 'primary':
      return kind === 'wrapper' ? primaryMain(props) : primaryContrast(props);

    case 'secondary':
      return kind === 'wrapper'
        ? secondaryMain(props)
        : secondaryContrast(props);

    case 'tertiary':
      return kind === 'wrapper' ? 'transparent' : secondaryContrast(props);

    default:
      return kind === 'wrapper' ? accentMain(props) : accentContrast(props);
  }
};

interface TouchableProps {
  rounded: boolean;
}
export const Touchable = styled(TouchableComponent)<TouchableProps>`
  border-radius: ${(props): string => (props.rounded ? '50px' : '0')};
`;

interface ButtonWrapperProps {
  rounded: boolean;
  type?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  disabled?: boolean;
}

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  height: 46px;
  flex-direction: row;
  align-items: center;
  margin-vertical: 6px;
  min-width: 180px;
  padding: ${(props): string => (props.rounded ? '0' : '10px 11px')};
  border-radius: ${(props): string => (props.rounded ? '50px' : '8px')};
  justify-content: center;
  background-color: ${(props): string => getVariant(props, 'wrapper')};
  border-color: ${(props): string => getVariant(props, 'wrapper')};
`;

ButtonWrapper.defaultProps = {
  type: 'primary',
};

interface TextButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  disabled?: boolean;
}
export const TextButton = styled(Typography).attrs({ variant: 'headline' })<
  TextButtonProps
>`
  letter-spacing: 0.4px;
  color: ${(props): string => getVariant(props, 'text')};
`;
