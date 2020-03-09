import React, { FC } from 'react';
import Animation from 'lottie-react-native';
import DefaultAnimation from './animation.json';

const smallSize = { width: 60, height: 60 };
const largeSize = { width: 120, height: 120 };

interface Props {
  large?: boolean;
  animation?: any;
}

const Loading: FC<Props> = ({
  large = false,
  animation = DefaultAnimation,
  ...rest
}) => (
  <Animation
    style={large ? largeSize : smallSize}
    source={animation}
    autoPlay
    loop
    {...rest}
  />
);

export default Loading;
