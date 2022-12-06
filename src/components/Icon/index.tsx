import { FC } from 'react';
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

export type IconType = {
  name: string;
  size?: IconSize;
  color?: IconColor;
  accessibility?: string;
};

const Icon: FC<IconType> = ({
  name,
  color = 'inherit',
  size = 'default',
  accessibility,
  ...rest
}): JSX.Element => (
  <IconButton aria-label={accessibility} color="inherit" edge="start" {...rest}>
    <MaterialIcon color={color} fontSize={size}>
      {name}
    </MaterialIcon>
  </IconButton>
);

export default Icon;
