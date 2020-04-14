import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon from '@material-ui/core/Icon';

type Props = {
  name: string;
};
const Icon: FC<Props> = ({ name, ...rest }): JSX.Element => (
  <IconButton color="inherit" edge="start" {...rest}>
    <MaterialIcon>{name}</MaterialIcon>
  </IconButton>
);

export default Icon;
