import { FC, useEffect } from 'react';
import lottie from 'lottie-web';
import {
  AnimationObject,
  LoadingVariants,
} from '@platformbuilders/theme-toolkit';
import animations from '../../theme/animations';

interface LoadingType {
  large?: boolean;
  contrast?: boolean;
  variant?: LoadingVariants;
  accessibility?: string;
}

const loadingVariant = ({
  variant,
  contrast,
}): undefined | string | number | AnimationObject | { uri: string } | null => {
  switch (variant) {
    case 'button':
      return contrast
        ? animations.contrastButtonLoading
        : animations.buttonLoading;
    case 'linear':
      return contrast
        ? animations.contrastLinearLoading
        : animations.linearLoading;
    default:
      return contrast
        ? animations.contrastCircularLoading
        : animations.circularLoading;
  }
};

const smallSize = {
  width: 60,
  height: 60,
};

const largeSize = {
  width: 120,
  height: 120,
};

const Loading: FC<LoadingType> = ({
  large = false,
  contrast = false,
  variant = 'circular',
  accessibility,
}) => {
  useEffect(() => {
    const animationData = loadingVariant({ variant, contrast });

    lottie.loadAnimation({
      container: document.getElementById('loading') as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div
      style={large ? largeSize : smallSize}
      id="loading"
      aria-label={accessibility || 'Aguarde...'}
    />
  );
};

export default Loading;
