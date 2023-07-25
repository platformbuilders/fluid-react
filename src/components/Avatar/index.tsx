import { FC } from 'react';

import { type AvatarVariants, Image, Wrapper } from './styles';

export type Props = {
  src: string;
  alt: string;
  variant?: AvatarVariants;
  onPress(): void;
};

const Avatar: FC<Props> = ({ src, onPress, alt, variant }) => (
  <Wrapper $variant={variant}>
    <Image alt={alt} src={src} onClick={onPress} />
  </Wrapper>
);

export default Avatar;
