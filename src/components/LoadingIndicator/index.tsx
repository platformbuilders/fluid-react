import { VFC } from 'react';
import Animation from 'react-lottie';
import loading from '../../assets/animations/loading.json';

export enum Sizes {
  small = 30,
  medium = 45,
  large = 60,
}

type SizeOptions = 'small' | 'medium' | 'large';

export type Props = {
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

const LoadingIndicator: VFC<Props> = ({ size = 'medium' }): JSX.Element => (
  <Animation
    options={defaultOptions}
    isStopped={false}
    isPaused={false}
    height={Sizes[size]}
    width={Sizes[size]}
  />
);

export default LoadingIndicator;
