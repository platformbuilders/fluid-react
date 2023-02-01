import { FC } from 'react';
import { DefaultAvatar } from './styles';

export type AvatarFormats = 'circle' | 'rounded' | 'square';

export type Props = {
  src: string;
  alt?: string;
  variant?: AvatarFormats;
  className?: string;
  onPress(): void;
};

const Avatar: FC<Props> = ({
  src,
  alt = '',
  variant = 'circle',
  onPress,
  className,
  ...rest
}): JSX.Element => (
  <DefaultAvatar
    alt={alt}
    src={src}
    variant={variant}
    onPress={onPress}
    className={className}
    {...rest}
  />
);

export default Avatar;
