import styled from 'styled-components';
import {
  ButtonVariants,
  ThemeProps,
  getTheme,
  ifStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
import { getBackgroundColor, getHoverColor, getTextColor } from '../../utils';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import TypographyComponent from '../Typography';

const spacingMd = getTheme('spacing.md');
const borderWidthSmall = getTheme('borderWidth.sm');
const buttonRadius = getTheme('borderRadius.sm');
const minimumSpacing = getTheme('spacing.xs');
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
  border-color: ${getBackgroundColor};
  border-width: ${hasBorder(borderWidthSmall, '0')}px;
  transition: all 0.2s ease-in-out;

  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  background-color: ${getBackgroundColor};
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  outline: none;

  && {
    ::-moz-focus-inner {
      border: none;
    }
    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
      opacity: 0;
      transition: opacity 0.2s;
    }
    ::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      padding: 50%;
      width: 32px; /* Safari */
      height: 32px; /* Safari */
      background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 1s, transform 0.5s;
    }
    :hover,
    :focus {
      background-color: ${getHoverColor};
    }
    :hover::before {
      opacity: 0.08;
    }
    :focus::before {
      opacity: 0.24;
    }
    :hover:focus::before {
      opacity: 0.3;
    }
    :active {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    :active::after {
      opacity: 0.32;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0s;
    }
    :disabled {
      color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
      background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
      box-shadow: none;
      cursor: initial;
    }
    :disabled::before {
      opacity: 0;
    }
    :disabled::after {
      opacity: 0;
    }
  }
`;

export const ContentWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  gap: ${spacingMd}px;

  svg {
    color: ${(props) =>
      getTextColor({ ...props, variant: props.$buttonVariant })};
  }
`;

export const TextButton = styled(TypographyComponent)<any>`
  letter-spacing: 0.4px;
  color: ${(props) =>
    getTextColor({ ...props, variant: props.$buttonVariant })};
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: ${pxToRem(55)}px;
`;
