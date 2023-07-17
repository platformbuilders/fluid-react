import { FC } from 'react';

type IconSize = 'inherit' | 'default' | 'small' | 'large';

type IconColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'action'
  | 'error'
  | 'disabled';

export type IconType = {
  name?: string;
  size?: IconSize;
  color?: IconColor;
  accessibility?: string;
};

const Icon: FC<IconType> = (): JSX.Element => null as any;

export default Icon;
