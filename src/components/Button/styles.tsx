import styled from 'styled-components';
import {
  ButtonVariants,
  ThemeProps,
  getTheme,
  ifStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
import { getBackgroundColor, getTextColor } from '../../utils';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const borderWidthSmall = getTheme('borderWidth.sm');
const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoContrast = getTheme('info.contrast');
const dangerContrast = getTheme('danger.contrast');
const warningContrast = getTheme('warning.contrast');
const buttonRadius = getTheme('borderRadius.sm');
const minimumSpacing = getTheme('spacing.xs');
const smallSpacing = getTheme('spacing.sm');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');
const isDisabled = ifStyle('disabled');
const hasBorder = ifStyle('hasBorder');

type ButtonWrapperProps = {
  rounded: boolean;
  hasBorder: boolean;
  variant: ButtonVariants;
  disabled?: boolean;
  style?: any;
  minWidth?: string | number;
  maxWidth?: string | number;
} & ThemeProps;

const buttonSize = 45;

const getHoverColor = (props: any): string => {
  if (props.disabled) {
    return `${brandPrimaryContrast(props)}`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return `${brandPrimary(props)}`;
    case 'secondary':
      return `${brandSecondary(props)}`;
    case 'tertiary':
      return `${brandTertiaryContrast(props)}`;
    case 'accent':
      return `${brandAccentContrast(props)}`;
    case 'danger':
      return `${dangerContrast(props)}`;
    case 'info':
      return `${infoContrast(props)}`;
    case 'warning':
      return `${warningContrast(props)}`;
    case 'invert':
      return `${brandPrimary(props)}`;
    case 'flat':
      return `${brandPrimary(props)}`;
    default:
      return `${brandPrimaryContrast(props)}`;
  }
};

export const Touchable = styled(TouchableComponent)``;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  cursor: ${isDisabled('not-allowed', 'pointer')};
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  min-width: ${({ minWidth }: ButtonWrapperProps): string =>
    `${minWidth || '180px'}`};
  max-width: ${({ maxWidth }: ButtonWrapperProps) => maxWidth || '100%'};
  overflow: hidden;
  padding: ${(props: ButtonWrapperProps): string =>
    props.rounded ? '0' : `${minimumSpacing(props)}px`};
  border-radius: ${(props: ButtonWrapperProps): any =>
    props.rounded ? buttonSize / 2 : buttonRadius(props)}px;
  justify-content: center;
  background-color: ${getBackgroundColor};
  border-color: ${getBackgroundColor};
  border-width: ${hasBorder(borderWidthSmall, '0')}px;
  transition: all 0.2s ease-in-out;
  && {
    :hover {
      background-color: ${getHoverColor};
    }
  }
`;

export const TextButton = styled(TypographyComponent)<any>`
  letter-spacing: 0.4px;
  color: ${getTextColor};
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: ${pxToRem(55)}px;
`;

type IconProps = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  buttonVariant: ButtonVariants;
  style: any;
} & ThemeProps;

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: getTextColor(props),
}))<IconProps>`
  margin-right: ${isLeftIcon(smallSpacing, 0)}px;
  margin-left: ${isRightIcon(smallSpacing, 0)}px;
`;
