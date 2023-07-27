import styled from 'styled-components';
import { getTheme, ifStyle } from '@platformbuilders/theme-toolkit';

type PlaceholderLabelProps = {
  $hasValue: boolean;
  $hasError: boolean;
};

type MessageProps = {
  $hasError: boolean;
};

type InputProps = {
  $hasError: boolean;
};

const dangerMain = getTheme('danger.main');
const textMain = getTheme('danger.main');
const hasError = ifStyle('$hasError');

export const PlaceholderLabel = styled.span<PlaceholderLabelProps>`
  position: absolute;
  top: 0.9375rem;
  left: 0.875rem;
  line-height: 147.6%;
  color: rgba(19, 19, 21, 0.6);
  transition: top 0.2s;

  ${({ $hasValue }) =>
    $hasValue &&
    'top: 0; font-size: 0.9375rem; margin-bottom: 40px; color: #1e4bd1;'}

  color: ${(props) => hasError(dangerMain(props), '#1e4bd1')(props)};
`;

export const Input = styled.input<InputProps>`
  border: none;
  border-bottom: 0.125rem solid rgba(19, 19, 21, 0.6);
  width: 100%;
  height: 3.5rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 0.5rem;
  border-color: ${(props) => hasError(dangerMain(props), '#121212')(props)};

  &:hover {
    background: rgba(73, 133, 224, 0.12);
  }

  &:focus {
    border-color: ${(props) => hasError(dangerMain(props), '#1e4bd1')(props)};
    outline: none;
  }

  &:focus + ${PlaceholderLabel} {
    top: 0;
    font-size: 0.9375rem;
    margin-bottom: 40px;
    color: ${(props) => hasError(dangerMain(props), '#1e4bd1')(props)};
  }

  background: #eff1f2;
`;

export const Message = styled.span<MessageProps>`
  font-size: 0.9375rem;
  color: ${(props) => hasError(dangerMain(props), textMain(props))(props)};
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
`;

export const Label = styled.label``;

export const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;
