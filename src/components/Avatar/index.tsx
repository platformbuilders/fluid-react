import { DefaultAvatar } from './styles';

export type AvatarFormats = 'circle' | 'rounded' | 'square';

export type Props = {
  className?: string;
  src: string;
  alt?: string;
  variant?: AvatarFormats;
  onPress(): void;
};

const Avatar = ({
  className,
  src,
  alt = '',
  variant = 'circle',
  onPress,
  ...rest
}: Props) => (
  <DefaultAvatar
    className={className}
    alt={alt}
    src={src}
    variant={variant}
    onPress={onPress}
    {...rest}
  />
);

export default Avatar;
