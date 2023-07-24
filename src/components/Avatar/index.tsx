import { FC } from 'react';

import { type AvatarVariants, Image, Wrapper } from './styles';

export type Props = {
  src: string;
  alt: string;
  variant?: AvatarVariants;
  onClick(): void;
};

const Avatar: FC<Props> = ({ src, onClick, alt, variant }) => (
  <Wrapper $variant={variant}>
    <Image alt={alt} src={src} onClick={onClick} />
  </Wrapper>
);

export default Avatar;
