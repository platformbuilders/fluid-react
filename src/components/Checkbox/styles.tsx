import styled from 'styled-components';
import { getTheme } from '@platformbuilders/theme-toolkit';

const brandPrimaryMain = getTheme('brand.primary.main');
const brandPrimaryContrast = getTheme('brand.primary.contrast');

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
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
    border-color: ${brandPrimaryMain};
    background-color: ${brandPrimaryMain};
  }

  input:checked + span::after,
  input:indeterminate + span::after {
    border-color: ${brandPrimaryContrast};
  }

  input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
  }

  &:hover {
    input {
      opacity: 0.12;

      :focus {
        opacity: 0.16;
      }
    }
  }

  input:active + span::before {
    border-color: ${brandPrimaryMain};
  }

  input:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.6);
  }

  input:disabled + span {
    color: rgba(0, 0, 0, 0.38);
    cursor: initial;
  }

  input:disabled + span::before {
    border-color: currentColor;
  }

  input:checked:disabled + span::before,
  input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
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
    background-color: ${brandPrimaryMain};
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
    border-color: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
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
