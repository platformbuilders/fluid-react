import React from 'react';
import { Animation } from '~/utils/modules';
import loadingAnimation from './animation.json';

const smallSize = { width: 60, height: 60 };
const largeSize = { width: 120, height: 120 };

type Props = {
  large?: boolean;
};

const Loading: React.FC<Props> = ({ large = false }) => (
  <Animation
    style={large ? largeSize : smallSize}
    source={loadingAnimation}
    autoPlay
    loop
  />
);

export default Loading;
