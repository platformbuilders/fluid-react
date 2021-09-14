import { MouseEventHandler } from 'react-router/node_modules/@types/react';
import { LinkProps as LinkBaseProps } from '@material-ui/core';

export type LinkProps = Omit<LinkBaseProps, 'onClick'> & {
  onPress?: MouseEventHandler;
};
