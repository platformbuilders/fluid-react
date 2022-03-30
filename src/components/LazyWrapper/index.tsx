import React, { FC } from 'react';
import { LazyWrapperProps } from '../../types';
import If from '../If';
import { LoadingIndicator, Wrapper } from './styles';

const LazyWrapper: FC<LazyWrapperProps> = ({
  loading = false,
  customLoadingIndicatorSize,
  customLoadingIndicator: CustomLoadingIndicator,
  customLoadingColor,
  children,
}) => {
  return (
    <Wrapper>
      <If condition={loading && !CustomLoadingIndicator}>
        <LoadingIndicator
          loading={loading}
          customLoadingColor={customLoadingColor}
          size={customLoadingIndicatorSize ? customLoadingIndicatorSize : 20}
        >
          <div />
        </LoadingIndicator>
      </If>
      <If condition={loading && !!CustomLoadingIndicator}>
        {CustomLoadingIndicator}
      </If>
      <If condition={!loading}>{children}</If>
    </Wrapper>
  );
};

export default LazyWrapper;
