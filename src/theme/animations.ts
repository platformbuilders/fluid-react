import { Animations } from '@platformbuilders/theme-toolkit';
import {
  LoadDotsAnimation,
  LoadDotsContrastAnimation,
  LoadingCircleAnimation,
  LoadingCircleContrastAnimation,
  LoadingProgressAnimation,
} from '../assets/animations';

export default {
  circularLoading: LoadingCircleAnimation,
  contrastCircularLoading: LoadingCircleContrastAnimation,
  buttonLoading: LoadDotsAnimation,
  contrastButtonLoading: LoadDotsContrastAnimation,
  linearLoading: LoadingProgressAnimation,
  contrastLinearLoading: LoadingProgressAnimation,
} as Animations;
