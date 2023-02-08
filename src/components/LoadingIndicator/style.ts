import Animation from 'react-lottie';
import styled from 'styled-components';
import {
  AnimationObject,
  LoadingVariants,
  ThemeProps,
  getTheme,
} from '@platformbuilders/theme-toolkit';

export const circularLoading = getTheme('circularLoading');
export const contrastCircularLoading = getTheme('contrastCircularLoading');
export const buttonLoading = getTheme('buttonLoading');
export const contrastButtonLoading = getTheme('contrastButtonLoading');
export const linearLoading = getTheme('linearLoading');
export const contrastLinearLoading = getTheme('contrastLinearLoading');

type IndicatorProps = {
  contrast: boolean;
  variant: LoadingVariants;
  testID: string;
  ['aria-label']: string;
} & ThemeProps;

const loadingVariant = (
  props: IndicatorProps,
): string | number | AnimationObject | { uri: string } => {
  const { variant, contrast } = props;
  switch (variant) {
    case 'button':
      return contrast ? contrastButtonLoading(props) : buttonLoading(props);
    case 'linear':
      return contrast ? contrastLinearLoading(props) : linearLoading(props);
    default:
      return contrast ? contrastCircularLoading(props) : circularLoading(props);
  }
};

export const smallSize = {
  width: 60,
  height: 60,
};

export const largeSize = {
  width: 120,
  height: 120,
};

export const Indicator = styled(Animation).attrs((props: any) => ({
  options: {
    animationData: loadingVariant(props),
    autoPlay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
}))<IndicatorProps>``;

export const Wrapper = styled.div``;
