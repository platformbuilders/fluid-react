import React from 'react';
import { LoadingIndicator as BuildersLoading } from 'builders-ui';
import CenteredView from '../utils/CenteredView';

const Loading = () => {
  return (
    <CenteredView>
      <BuildersLoading large={false} />
    </CenteredView>
  );
};

export default Loading;
