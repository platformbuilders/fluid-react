import styled from 'styled-components';
import {
  ButtonVariants,
  ThemeProps,
  TypographyVariants,
  getTheme,
  ifStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const borderWidthSmall = getTheme('borderWidth.sm');
const brandPrimary = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const brandSecondary = getTheme('brand.secondary.main');
const brandSecondaryContrast = getTheme('brand.secondary.contrast');
const brandTertiary = getTheme('brand.tertiary.main');
const brandTertiaryContrast = getTheme('brand.tertiary.contrast');
const brandAccent = getTheme('brand.accent.main');
const brandAccentContrast = getTheme('brand.accent.contrast');
const infoMain = getTheme('info.main');
const infoContrast = getTheme('info.contrast');
const dangerMain = getTheme('danger.main');
const dangerContrast = getTheme('danger.contrast');
const warningMain = getTheme('warning.main');
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
  buttonVariant: ButtonVariants;
  disabled?: boolean;
  style?: any;
  minWidth?: string | number;
  maxWidth?: string | number;
} & ThemeProps;

const buttonSize = 45;

const getBackgroundColor = (props: ButtonWrapperProps): string => {
  if (props.disabled) {
    return `${brandPrimary(props)}70`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return `${brandPrimary(props)}`;
    case 'secondary':
      return `${brandSecondary(props)}`;
    case 'tertiary':
      return `${brandTertiary(props)}`;
    case 'accent':
      return `${brandAccent(props)}`;
    case 'info':
      return `${infoMain(props)}`;
    case 'warning':
      return `${warningMain(props)}`;
    case 'danger':
      return `${dangerMain(props)}`;
    case 'invert':
      return `${brandPrimaryContrast(props)}`;
    case 'flat':
      return `${'transparent'}`;
    default:
      return `${brandPrimary(props)}`;
  }
};

type TextButtonProps = {
  buttonVariant: ButtonVariants;
  variant?: TypographyVariants;
  disabled?: boolean;
  style: any;
} & ThemeProps;

const getTextColor = (props: TextButtonProps): string => {
  if (props.disabled) {
    return `${brandPrimaryContrast(props)}`;
  }
  switch (props.buttonVariant) {
    case 'primary':
      return `${brandPrimaryContrast(props)}`;
    case 'secondary':
      return `${brandSecondaryContrast(props)}`;
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

export const ButtonWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))<ButtonWrapperProps>`
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
  className?: string;
} & ThemeProps;

export const Icon = styled(DefaultIcon).attrs((props: IconProps) => ({
  color: getTextColor(props),
  className: props.className,
}))<IconProps>`
  margin-right: ${isLeftIcon(smallSpacing, 0)}px;
  margin-left: ${isRightIcon(smallSpacing, 0)}px;
`;
