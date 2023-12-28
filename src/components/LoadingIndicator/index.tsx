import { FC, useEffect, useRef } from 'react';
import {
  AnimationObject,
  LoadingVariants,
} from '@platformbuilders/theme-toolkit';
import animations from '../../theme/animations';

export type LoadingType = {
  large?: boolean;
  contrast?: boolean;
  variant?: LoadingVariants;
  accessibility?: string;
};

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

const LoadingIndicator: FC<LoadingType> = ({
  large = false,
  contrast = false,
  variant = 'circular',
  accessibility,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const loadAnimation = async () => {
    if (ref.current) {
      const animationData = loadingVariant({ variant, contrast });
      const lottie = await import('lottie-web');

      lottie.default.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  };

  useEffect(() => {
    loadAnimation();
  }, [ref]);

  return (
    <div
      ref={ref}
      style={large ? largeSize : smallSize}
      id="loading"
      aria-label={accessibility || 'Aguarde...'}
    />
  );
};

export default LoadingIndicator;
