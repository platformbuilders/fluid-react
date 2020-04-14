import React, { FC } from 'react';
import Animation from 'react-lottie';
import loading from '../../assets/animations/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

enum sizes {
  small = 30,
  medium = 45,
  large = 60,
}

type sizeOptions = 'small' | 'medium' | 'large';

type Props = {
  size?: sizeOptions;
};
const LoadingIndicator: FC<Props> = ({ size }): JSX.Element => (
  <Animation
    options={defaultOptions}
    isStopped={false}
    isPaused={false}
    height={sizes[`${size}`] || 45}
    width={sizes[`${size}`] || 45}
  />
);
export default LoadingIndicator;
