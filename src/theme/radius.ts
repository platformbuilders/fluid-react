import { pxToRem } from '@platformbuilders/helpers';
import { Radius } from '../types';

export default {
  smallRadius: pxToRem(3),
  mediumRadius: pxToRem(8),
  largeRadius: pxToRem(15),
  modalRadius: pxToRem(20),
  buttonRadius: pxToRem(5),
} as Radius;
