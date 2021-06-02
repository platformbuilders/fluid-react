import React, { FC } from 'react';
import MaterialIcon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

type IconSize = 'inherit' | 'default' | 'small' | 'large';

type IconColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'action'
  | 'error'
  | 'disabled';

export type Props = {
  name: string;
  size?: IconSize;
  color?: IconColor;
};

const Icon: FC<Props> = ({
  name,
  color = 'inherit',
  size = 'default',
  ...rest
}): JSX.Element => (
  <IconButton color="inherit" edge="start" {...rest}>
    <MaterialIcon color={color} fontSize={size}>
      {name}
    </MaterialIcon>
  </IconButton>
);

export default Icon;
