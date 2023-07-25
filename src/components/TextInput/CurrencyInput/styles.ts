import ReactMaskedInput from 'react-text-mask';
import styled from 'styled-components';

import { PlaceholderLabel } from '../styles';

export const MaskedInput = styled(ReactMaskedInput as any)`
  border: none;
  border-bottom: 0.125rem solid rgba(19, 19, 21, 0.6);
  width: 100%;
  height: 3.5rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 0.5rem;

  &:hover {
    background: rgba(73, 133, 224, 0.12);
    border-color: #121212;
  }

  &:focus {
    border-color: #1e4bd1;
    outline: none;
  }

  &:focus + ${PlaceholderLabel} {
    top: 0;
    font-size: 0.9375rem;
    margin-bottom: 40px;
    color: #1e4bd1;
  }

  background: #eff1f2;
`;
