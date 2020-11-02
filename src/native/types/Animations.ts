export interface AnimationObject {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

export type Animations = {
  circularLoading?: string | AnimationObject | { uri: string };
  contrastCircularLoading?: string | AnimationObject | { uri: string };
  linearLoading?: string | AnimationObject | { uri: string };
  contrastLinearLoading?: string | AnimationObject | { uri: string };
  buttonLoading?: string | AnimationObject | { uri: string };
  contrastButtonLoading?: string | AnimationObject | { uri: string };
};
