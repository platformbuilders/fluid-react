import styled from 'styled-components/native';
import Animation from 'lottie-react-native';
import { moderateScale } from 'react-native-size-matters';
import { getTheme } from '../../utils/helpers';
import { AnimationObject, LoadingVariants } from '../../types';
import LoadingAnimation from '../../assets/animations/loading.json';

export const circularLoading = getTheme('circularLoading');
export const buttonLoading = getTheme('buttonLoading');
export const linearLoading = getTheme('linearLoading');

interface IndicatorProps {
  variant: LoadingVariants;
}

const loadingVariant = (
  props: any,
): string | AnimationObject | { uri: string } => {
  switch (props.variant) {
    case 'button':
      return buttonLoading(props) || LoadingAnimation;
    case 'circular':
      return circularLoading(props) || LoadingAnimation;
    case 'linear':
      return linearLoading(props) || LoadingAnimation;
    default:
      return circularLoading(props) || LoadingAnimation;
  }
};

export const smallSize = {
  width: moderateScale(60),
  height: moderateScale(60),
};

export const largeSize = {
  width: moderateScale(120),
  height: moderateScale(120),
};

export const Indicator = styled(Animation).attrs((props) => ({
  source: loadingVariant(props),
  autoPlay: true,
  loop: true,
}))<IndicatorProps>``;
