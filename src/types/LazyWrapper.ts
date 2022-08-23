import { ReactNode } from 'react';

export type LazyWrapperProps = {
  loading: boolean;
  customLoadingIndicator?: ReactNode;
  customLoadingColor?: string;
  customLoadingIndicatorSize?: string | number;
  justifyLoadingIndicator?: 'flex-start' | 'center' | 'flex-end';
  alignLoadingIndicator?: 'flex-start' | 'center' | 'flex-end';
  children: ReactNode;
};
