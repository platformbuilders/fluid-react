import React from 'react';
import { Animation } from '../../utils/modules';
import DefaultAnimation from './animation.json';

const smallSize = { width: 60, height: 60 };
const largeSize = { width: 120, height: 120 };

type Props = {
  large?: boolean;
  animation?: any;
};

const Loading: React.FC<Props> = ({
  large = false,
  animation = DefaultAnimation,
}) => (
  <Animation
    style={large ? largeSize : smallSize}
    source={animation}
    autoPlay
    loop
  />
);

export default Loading;
