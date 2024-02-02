import styled, { css } from 'styled-components';
import {
  ThemeProps,
  getTheme,
  ifStyle,
  pxToRem,
} from '@platformbuilders/theme-toolkit';
import LoadingIndicator from '../LoadingIndicator';
import TouchableComponent from '../Touchable';
import Typography from '../Typography';
import { ButtonProps } from './types';

const buttonRadius = getTheme('themeRadius.button');
const spacingSm = getTheme('spacing.sm');
const borderWidthSm = getTheme('borderWidth.sm');
const isDisabled = ifStyle('disabled');

type ButtonWrapperProps = ButtonProps & ThemeProps;

const getStylesButton = (props: ButtonWrapperProps) => {
  const colorButton =
    getTheme(`brand.${props.colorVariant}.main`)(props) ||
    getTheme(`${props.colorVariant}.main`)(props);
  const colorConstrastButton =
    getTheme(`brand.${props.colorVariant}.contrast`)(props) ||
    getTheme(`${props.colorVariant}.contrast`)(props);
  const defaultTheme = css`
    background-color: ${colorButton};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: ${colorButton}90;
    }
    .text-button {
      color: ${colorConstrastButton};
    }
    svg {
      color: ${colorConstrastButton};
    }
  `;
  switch (props.variant) {
    case 'filled':
      return defaultTheme;
    case 'ghost':
      return css`
        background-color: transparent;
        &:hover {
          background-color: ${colorButton}10;
        }
        .text-button {
          color: ${colorButton};
        }
        svg {
          color: ${colorButton};
        }
      `;

    case 'tint':
      return css`
        background-color: ${colorButton}10;
        &:hover {
          background-color: ${colorButton}20;
        }
        .text-button {
          color: ${colorButton};
        }
        svg {
          color: ${colorButton};
        }
      `;

    case 'outline':
      return css`
        background-color: transparent;
        border: ${borderWidthSm}px solid ${colorButton};
        &:hover {
          background-color: ${colorButton}10;
        }
        .text-button {
          color: ${colorButton};
        }
        svg {
          color: ${colorButton};
        }
      `;

    default:
      return defaultTheme;
  }
};

const sizeButton = {
  normal: css`
    height: 2.25rem;
  `,
  medium: css`
    height: 2.75rem;
  `,
  large: css`
    height: 3.25rem;
  `,
};

export const Touchable = styled(TouchableComponent)<ButtonWrapperProps>`
  border: none;
  ${getStylesButton}
  ${({ size }) => !!size && sizeButton[size]}
  width: ${({ $fullWidth }) => (!!$fullWidth ? '100%' : undefined)};
  padding: ${spacingSm}px;
  cursor: ${isDisabled('not-allowed', 'pointer')};
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  border-radius: ${buttonRadius}px;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  outline: none;

  &::-moz-focus-inner {
    border: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(255, 255, 255);
    opacity: 0;
    transition: opacity 0.2s;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(255, 255, 255);
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }
  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  &:active::after {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
  &:disabled {
    opacity: 0.3;
    cursor: initial;
  }
  &:disabled::before {
    opacity: 0;
  }
  &:disabled::after {
    opacity: 0;
  }
`;

export const ContentWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const TextButton = styled(Typography)`
  letter-spacing: 0.4px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.8px;
`;

export const Loading = styled(LoadingIndicator).attrs({
  variant: 'button',
})`
  align-self: center;
  width: ${pxToRem(55)}px;
`;
