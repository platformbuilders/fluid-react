import { FC } from 'react';
import { DefaultAvatar } from './styles';

export type AvatarFormats = 'circle' | 'rounded' | 'square';

export type Props = {
  src: string;
  alt?: string;
  variant?: AvatarFormats;
  onPress(): void;
};

const Avatar: FC<Props> = ({
  src,
  alt = '',
  variant = 'circle',
  onPress,
  ...rest
}): JSX.Element => (
  <DefaultAvatar
    alt={alt}
    src={src}
    variant={variant}
    onPress={onPress}
    {...rest}
  />
);

export default Avatar;
