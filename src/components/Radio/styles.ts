import styled from 'styled-components';
import { getTheme, ifStyle } from '@platformbuilders/theme-toolkit';

const brandPrimaryMain = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');
const themeRadiusInput = getTheme('themeRadius.input');
const spacingXs = getTheme('spacing.xs');
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const textMain = getTheme('text.main');
const isDisabled = ifStyle('disabled');

type WrapperProps = {
  disabled?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  padding: ${spacingXs}px ${spacingSm}px ${spacingXs}px ${spacingMd}px;
  opacity: ${isDisabled('0.3', '1')};

  &:hover {
    background-color: ${(props) =>
      isDisabled('transparent', `${brandPrimaryMain(props)}10`)};
    border-radius: ${themeRadiusInput}px;
  }

  &:hover > label {
    color: ${(props) => isDisabled(`${textMain(props)}70`, textMain)};
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label:before {
    background: ${brandPrimaryMain};
  }

  &:checked + label:after {
    border-color: ${brandPrimaryContrast};
    transition-property: transform, border-color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  &:checked + label {
    color: ${textMain};
  }

  &:disabled + label {
    cursor: initial;
  }
`;

export const Label = styled.label`
  color: ${textMain}70;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: relative;
    display: inline-block;
    vertical-align: bottom;
  }

  &:before {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    border: 2px solid ${brandPrimaryMain};
    margin-right: ${spacingSm}px;
  }

  &:after {
    position: absolute;
    top: 0.5rem;
    left: 21px;
    width: 0.375rem;
    height: 0.1875rem;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(0.0625rem, 0.125rem) rotate(-45deg);
  }
`;
