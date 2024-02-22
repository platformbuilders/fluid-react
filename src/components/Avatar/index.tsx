import { FC, ImgHTMLAttributes } from 'react';

import { type AvatarVariants, Image, Wrapper } from './styles';

export type Props = {
  src: string;
  alt: string;
  variant?: AvatarVariants;
  onPress(): void;
} & ImgHTMLAttributes<HTMLImageElement>;

const Avatar: FC<Props> = ({ src, onPress, alt, variant, ...rest }) => (
  <Wrapper $variant={variant}>
    <Image alt={alt} src={src} onClick={onPress} {...rest} />
  </Wrapper>
);

export default Avatar;
