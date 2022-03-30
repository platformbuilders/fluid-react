import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { LazyWrapperProps } from '../../types';
import { getTextColor } from '../../utils/helpers/color';

export const Wrapper = styled(Fragment)`
  width: 100%;
`;

export const LoadingIndicator = styled(CircularProgress)<LazyWrapperProps>`
  &.MuiCircularProgress-root {
    color: ${getTextColor};

    ${({ customLoadingColor }) =>
      customLoadingColor &&
      css`
        color: ${customLoadingColor};
      `}
  }
`;
