import styled from 'styled-components';
import { getTheme, ifStyle } from '@platformbuilders/theme-toolkit';

const brandPrimaryContrast = getTheme('brand.primary.contrast');
const infoMain = getTheme('info.main');
const spacingSm = getTheme('spacing.sm');
const borderRadiusSm = getTheme('borderRadius.sm');

// Ifs
const isEnabled = ifStyle('enabled');

type WrapperProps = {
  enabled?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  padding: ${spacingSm}px;
  border-radius: ${borderRadiusSm}px;
  transition: 0.5s;

  &:hover {
    background-color: ${isEnabled(infoMain)}20;
  }
`;

export const CheckboxRoot = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  line-height: 1.5;

  input:checked + span::before,
  input:indeterminate + span::before {
    border-color: ${infoMain};
    background-color: ${infoMain};
  }

  input:checked + span::after,
  input:indeterminate + span::after {
    border-color: ${brandPrimaryContrast};
  }

  input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
  }

  input:active + span::before {
    border-color: ${infoMain};
  }

  input:disabled + span {
    color: rgba(0, 0, 0, 0.38);
    cursor: initial;
  }

  input:disabled + span::before {
    border-color: ${infoMain};
    opacity: 0.5;
  }

  input:checked:disabled + span::before,
  input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: ${infoMain};
  }
`;

export const Check = styled.input`
  appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: ${infoMain};
  }

  &:focus {
    opacity: 0.04;
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &:disabled {
    opacity: 0;
  }
`;

export const Label = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: ${infoMain};
    border-radius: 3px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }
`;
