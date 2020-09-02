import React, { FC } from 'react';
import Animation from 'react-lottie';
import loading from '../../assets/animations/loading.json';

enum Sizes {
  small = 30,
  medium = 45,
  large = 60,
}

type SizeOptions = 'small' | 'medium' | 'large';

type Props = {
  size?: SizeOptions;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LoadingIndicator: FC<Props> = ({ size }): JSX.Element => (
  <Animation
    options={defaultOptions}
    isStopped={false}
    isPaused={false}
    height={Sizes[`${size}`] || 45}
    width={Sizes[`${size}`] || 45}
  />
);

export default LoadingIndicator;
