import styled from 'styled-components';
import {
  ButtonVariants,
  ThemeProps,
  getTheme,
  ifStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
import { getBackgroundColor, getHoverColor, getTextColor } from '../../utils';
import DefaultIcon from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const borderWidthSmall = getTheme('borderWidth.sm');
const buttonRadius = getTheme('borderRadius.sm');
const minimumSpacing = getTheme('spacing.xs');
const smallSpacing = getTheme('spacing.sm');
const isLeftIcon = ifStyle('leftIcon');
const isRightIcon = ifStyle('rightIcon');
const isDisabled = ifStyle('disabled');
const hasBorder = ifStyle('$hasBorder');
const isRounded = ifStyle('$rounded');

type ButtonWrapperProps = {
  $rounded: boolean;
  $hasBorder: boolean;
  variant: ButtonVariants;
  disabled?: boolean;
  style?: any;
  minWidth?: string | number;
  maxWidth?: string | number;
} & ThemeProps;

const buttonSize = 45;

export const Touchable = styled(TouchableComponent)<ButtonWrapperProps>`
  cursor: ${isDisabled('not-allowed', 'pointer')};
  height: ${buttonSize}px;
  flex-direction: row;
  align-items: center;
  min-width: ${({ minWidth }: ButtonWrapperProps): string =>
    `${minWidth || '180px'}`};
  max-width: ${({ maxWidth }: ButtonWrapperProps) => maxWidth || '100%'};
  overflow: hidden;
  padding: ${isRounded(0, minimumSpacing)}px;
  border-radius: ${isRounded(buttonSize / 2, buttonRadius)}px;
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
  color: ${(props) => getTextColor({ ...props, variant: props.buttonVariant })};
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
