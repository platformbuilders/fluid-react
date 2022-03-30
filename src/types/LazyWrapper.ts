import { ComponentType, ReactNode } from 'react';

export type LazyWrapperProps = {
  loading: boolean;
  customLoadingIndicator?: ComponentType<any>;
  customLoadingColor?: string;
  customLoadingIndicatorSize?: string | number;
  children: ReactNode;
};
