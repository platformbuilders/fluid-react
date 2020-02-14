import React from 'react';
import { LoadingIndicator as BuildersLoading } from 'builders-ui';
import CenteredView from '../utils/CenteredView';
import customAnimation from './animation.json';

const CustomLoading = () => {
  return (
    <CenteredView>
      <BuildersLoading large={true} animation={customAnimation} />
    </CenteredView>
  );
};

export default CustomLoading;
