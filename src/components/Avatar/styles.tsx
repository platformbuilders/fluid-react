import React from 'react';
import styled from 'styled-components';
import MaterialAvatar from '@material-ui/core/Avatar';
import { StylesProvider } from '@material-ui/styles';
import { Touchable } from '..';

export const DefaultAvatar = styled(({ onPress, ...rest }) => (
  <StylesProvider injectFirst>
    <Touchable onPress={onPress}>
      <MaterialAvatar {...rest} />
    </Touchable>
  </StylesProvider>
))``;
