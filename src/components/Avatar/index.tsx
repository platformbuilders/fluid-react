import React, { FC } from 'react';
import { DefaultAvatar } from './styles';

type Props = {
  src: string;
  onPress(): void;
};

const Avatar: FC<Props> = ({ src, onPress, ...rest }): JSX.Element => (
  <DefaultAvatar src={src} onPress={onPress} {...rest} />
);
export default Avatar;
