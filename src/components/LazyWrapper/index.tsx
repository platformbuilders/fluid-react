import React, { FC } from 'react';
import { LazyWrapperProps } from '../../types';
import If from '../If';
import { LoadingIndicator, LoadingIndicatorWrapper, Wrapper } from './styles';

const LazyWrapper: FC<LazyWrapperProps> = ({
  loading = false,
  customLoadingIndicatorSize,
  customLoadingIndicator: CustomLoadingIndicator,
  justifyLoadingIndicator,
  alignLoadingIndicator,
  customLoadingColor,
  children,
}) => {
  return (
    <Wrapper>
      <If condition={loading && !CustomLoadingIndicator}>
        <LoadingIndicatorWrapper
          justifyLoadingIndicator={justifyLoadingIndicator}
          alignLoadingIndicator={alignLoadingIndicator}
        >
          <LoadingIndicator
            loading={loading}
            customLoadingColor={customLoadingColor}
            size={customLoadingIndicatorSize ? customLoadingIndicatorSize : 20}
          >
            <div />
          </LoadingIndicator>
        </LoadingIndicatorWrapper>
      </If>
      <If condition={loading && !!CustomLoadingIndicator}>
        <LoadingIndicatorWrapper
          justifyLoadingIndicator={justifyLoadingIndicator}
          alignLoadingIndicator={alignLoadingIndicator}
        >
          {CustomLoadingIndicator}
        </LoadingIndicatorWrapper>
      </If>
      <If condition={!loading}>{children}</If>
    </Wrapper>
  );
};

export default LazyWrapper;
